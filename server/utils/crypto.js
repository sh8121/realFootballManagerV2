const crypto = require("crypto");
const config = require("../config");

module.exports = {
    encrypt: (str) => {
        const encrypted = crypto.createHmac("sha1", config.secret)
                            .update(str)
                            .digest("base64");

        return encrypted;
    }
}