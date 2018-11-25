const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require("../utils/crypto");

const Team = new Schema({
    teamName: String,
    password: String,
    players: { type: Array, default: []},
    matches: { type: Array, default: []}
});

Team.statics.create = function(teamName, password){
    const encrypted = crypto.encrypt(password);

    const team = new this({
        teamName,
        password: encrypted
    });

    return team.save();
}

Team.statics.findOneByName = function(teamName){
    return this.findOne({
        teamName
    }).exec();
}

Team.methods.verify = function(password){
    const encrypted = crypto.encrypt(password);
    return this.password === encrypted;
}

module.exports = mongoose.model("Team", Team);