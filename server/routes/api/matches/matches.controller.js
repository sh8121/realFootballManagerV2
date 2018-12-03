const Match = require("../../../models/match");
const PlayerInMatch = require("../../../models/playerInMatch");

module.exports.createMatch = (req, res) => {
    const {competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard} = req.body;
    const teamId = req.info._id;

    const respond = (result) => {
        res.json({
            message: "Created Successfully",
            matchId: result.insertId
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Match.create(teamId, competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard)
        .then(respond, onError);
}

module.exports.createPlayerInMatch = (req, res) => {
    const {players} = req.body;
    const matchId = req.params.id;
    const values = [];
    players.forEach((player) => {
        const value = [];
        value[0] = player.id;
        value[1] = matchId;
        value[2] = player.goal;
        value[3] = player.assist;
        value[4] = player.shot;
        value[5] = player.shotOnTarget;
        value[6] = player.pass;
        value[7] = player.yellowCard;
        value[8] = player.redCard;
        values.push(value);
    });

    const respond = () => {
        res.json({
            message: "Created Successfully"
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    };

    PlayerInMatch.bulkCreate(values)
        .then(respond, onError);
}

module.exports.findMatchByTeam = (req, res) => {
    const teamId = req.info._id;

    const respond = (matches) => {
        res.json({
            message: "Find Successfully",
            matches
        });
    };

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Match.findByTeam(teamId)
        .then(respond, onError);
}