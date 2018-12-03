const connection = require("../utils/dbConnection");

class Match{
    static create(teamId, competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard){
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO matches(teamId, competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard) VALUES (?,?,?,?,?,?,?,?,?,?)";
            connection.query(sql, [teamId, competitorName, goal, competitorGoal, assist, shot, shotOnTarget, pass, yellowCard, redCard], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        });
    }

    static findOneById(id){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * from matches WHERE id=?";
            connection.query(sql, [id], (err, result) => {
                if(err)
                    return reject(err);

                if(!result || result.length == 0)
                    return reject(new Error("Match doesn't exist"));

                return resolve(result);
            });
        });      
    }

    static findByTeam(teamId){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM matches WHERE teamId = ?";
            connection.query(sql, [teamId], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        })
    }

    static update(id){

    }

    static delete(id){

    }
}

module.exports = Match;