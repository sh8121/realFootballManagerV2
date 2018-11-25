const crypto = require("../utils/crypto");
const connection = require("../utils/dbConnection");

class Team{
    constructor(id, teamName, password){
        this.id = id;
        this.teamName = teamName;
        this.password = password;
    }

    static create(teamName, password){
        return new Promise((resolve, reject) => {
            const encrypted = crypto.encrypt(password);
            const sql = "INSERT INTO teams (teamName, password) VALUES (?, ?)";
            connection.query(sql, [teamName, encrypted], (err, result) => {
                if(err)
                    return reject(err);
                return resolve(result);
            });
        })
    }

    static findOneByName(teamName){
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM teams WHERE teamName = ?";
            connection.query(sql, [teamName], (err, result) => {
                if(err)
                    return reject(err);
                if(!result || result.length === 0)
                    return resolve(null);
                return resolve(new Team(result[0].id, result[0].teamName, result[0].password));
            });
        })
    }

    verify(password){
        const encrypted = crypto.encrypt(password);
        return this.password === encrypted;
    }
}

module.exports = Team;