const Player = require("../../../models/player");
const PlayerInMatch = require("../../../models/playerInMatch");

module.exports.createPlayer = (req, res) => {
    const {name, number, position} = req.body;
    const teamId = req.info._id;

    const respond = () => {
        res.json({
            message: "Created Successfully"
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    Player.create(name, number, position, teamId)
        .then(respond, onError);
}

module.exports.findPlayerById = (req, res) => {
    const { id } = req.params;

    const respond = (player) => {
        if(!player){
            res.status(409).json({
                message: "Player does not exist"
            });
        }
        else{
            res.json({
                message: "Find Successfully",
                player
            });
        }
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Player.findOneById(id)
        .then(respond, onError);
}

module.exports.findPlayerByTeam = (req, res) => {
    const teamId = req.info._id;

    const respond = (players) => {
        res.json({
            message: "Find Successfully",
            players
        })
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Player.findByTeam(teamId)
        .then(respond, onError);
}

module.exports.findMatchByPlayer = (req, res) => {
    const {id} = req.params;

    const respond = (matches) => {
        res.json({
           message: "Find Successfully",
           matches 
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    PlayerInMatch.findByPlayerId(id)
        .then(respond, onError);
}

module.exports.updatePlayer = (req, res) => {
    const { id } = req.params;
    const { number, position } = req.body;

    const respond = () => {
        res.json({
            message: "Updated Successfully"
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Player.update(id, number, position)
        .then(respond, onError);
}

module.exports.deletePlayer = (req, res) => {
    const { id } = req.params;

    const respond = () => {
        res.json({
            message: "Deleted Successfully"
        })
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Player.delete(id)
        .then(respond, onError);
}