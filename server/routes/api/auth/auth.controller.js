const jwt = require("jsonwebtoken");
const Team = require("../../../models/team");

module.exports.register = (req, res) => {
    const { teamName, password } = req.body;

    const create = (team) => {
        if(team){
            throw new Error("Team already exists");
        }
        return Team.create(teamName, password);
    }

    const respond = () => {
        res.json({
            message: "Registered Successfully"
        });
    }

    const onError = (error) => {
        res.status(409).json({
           message: error.message
        });
    }

    Team.findOneByName(teamName)
        .then(create)
        .then(respond)
        .catch(onError);
}

module.exports.login = (req, res) => {
    const { teamName, password } = req.body;
    const secret = req.app.get("jwt-secret");

    const check = (team) => {
        if(!team){
            throw new Error("Team does not exist");
        }

        if(!team.verify(password)){
            throw new Error("Password incorrect");
        }

        return new Promise((resolve, reject) => {
            jwt.sign(
                {
                    _id: team.id,
                    teamName: team.teamName
                },
                secret,
                {
                    expiresIn: "1d",
                    issuer: "sboo.kr",
                    subject: "teaminfo"
                },
                (err, token) => {
                    if(err)
                        return reject(err);
                    return resolve(token);
                }
            )
        });
    }

    const respond = (token) => {
        res.json({
           message: "Logged In Successfully",
           team: {
               teamName: teamName,
               token
           }
        });
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    }

    Team.findOneByName(teamName)
        .then(check)
        .then(respond)
        .catch(onError);
}