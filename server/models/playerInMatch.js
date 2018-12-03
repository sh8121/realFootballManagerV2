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
        });
    }

    static findByMatchId(matchId){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * from playerInMatch WHERE matchId = ?";
            connection.query(sql, [matchId], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        });
    }

    static findByPlayerId(playerId){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * from playerInMatch WHERE playerId = ?";
            connection.query(sql, [playerId], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        }); 
    }
}

module.exports = PlayerInMatch;