const jwt = require("jsonwebtoken");
const Player = require("../models/player");
const Match = require("../models/match");

module.exports.authMiddleware = (req, res, next) => {
    const token = req.token;
    if(!token){
        return res.status(403).json({
            message: "Not Looged In"
        });
    }

    jwt.verify(token, req.app.get("jwt-secret"), (error, decoded) => {
        if(error){
            return res.status(403).json({
                message: error.message
            });
        }
        req.info = decoded;
        next();
    })
}

module.exports.verifyPlayerIdMiddleware = (req, res, next) => {
    const teamId = req.info._id;
    const playerId = req.params.id || req.body.id;
    Player.findByTeam(teamId)
    .then((result) => {
        if(result && result.length > 0){
            for(let idx in result){
                if(result[idx].id == playerId){
                    return next();
                }
            }
            res.status(403).json({
                message: "Forbidden"
            });
        }
        else{
            res.status(409).json({
                message: "Player does not exist"
            });
        }
    })
    .catch((error) => {
        res.status(409).json({
            message: error.message
        });
    });
}

module.exports.verifyMatchIdMiddleware = (req, res, next) => {
    const teamId = req.info._id;
    const matchId = req.params.id || res.body.id;
    Match.findByTeam(teamId)
    .then((result) => {
        if(result && result.length > 0){
            for(let idx in result){
                if(result[idx].id == matchId){
                    return next();
                }
            }
            res.status(403).json({
                message: "Forbidden"
            });
        }
        else{
            res.status(409).json({
                message: "Player does not exist"
            });
        }
    })
    .catch((error) => {
        res.status(409).json({
            message: error.message
        });
    });
}
