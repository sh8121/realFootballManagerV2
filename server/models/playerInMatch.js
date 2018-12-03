const connection = require("../utils/dbConnection");

class PlayerInMatch{
    static create(playerId, matchId, goal, assist, shot, shotOnTarget, pass, yellowCard, redCard){
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO playerInMatch(playerId, matchId, goal, assist, shot, shotOnTarget, pass, yellowCard, redCard) VALUES(?,?,?,?,?,?,?,?,?)";
            connection.query(sql, [playerId, matchId, goal, assist, shot, shotOnTarget, pass, yellowCard, redCard], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        });
    }

    static bulkCreate(players){
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO playerInMatch(playerId, matchId, goal, assist, shot, shotOnTarget, pass, yellowCard, redCard) VALUES ?";
            connection.query(sql, [players], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        })
    }
}

module.exports = PlayerInMatch;