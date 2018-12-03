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