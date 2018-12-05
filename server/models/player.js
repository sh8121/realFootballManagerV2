const connection = require("../utils/dbConnection");

class Player{
    static create(name, number, position, teamId){
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO players(name, number, position, teamId) VALUES(?, ?, ?, ?)";
            connection.query(sql, [name, number, position, teamId], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        });
    }

    static findOneById(id){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM players WHERE id=?";
            connection.query(sql, [id], (err, result) => {
                if(err)
                    return reject(err);
                if(!result || result.length === 0)
                    return resolve(null);
                return resolve(result[0]);
            });
        })
    }

    static findByTeam(teamId){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * from players WHERE teamId=?";
            connection.query(sql, [teamId], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            })
        });
    }

    static update(id, number, position){
        return new Promise((resolve, reject) => {
            const sql = "UPDATE players SET number=?, position=? WHERE id=?";
            connection.query(sql, [number, position, id], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM players WHERE id=?";
            connection.query(sql, [id], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        });
    }
}

module.exports = Player;