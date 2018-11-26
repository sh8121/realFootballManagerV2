const connection = require("../utils/dbConnection");

class Player{
    constructor(id, name, number, position, formationNumber, teamId){
        this.id = id;
        this.name = name;
        this.number = number;
        this.position = position;
        this.formationNumber = formationNumber;
        this.teamId = teamId;
    }

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

    static update(id, number, position, formationNumber){
        return new Promise((resolve, reject) => {
            const sql = "UPDATE players SET number=?, position=?, formationNumber=? WHERE id=?";
            connection.query(sql, [number, position, formationNumber, id], (err, result) => {
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