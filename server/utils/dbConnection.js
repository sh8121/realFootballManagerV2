const mysql = require("mysql");
const config = require("../config");

let connection;

function getConnection(){
    if(!connection){
        connection = mysql.createConnection({
            host: config.mysqlConfig.host,
            user: config.mysqlConfig.user,
            password: config.mysqlConfig.password,
            database: config.mysqlConfig.database
        });

        connection.connect((err) => {
            if(err)
                throw err;
            console.log("mysql connected.");
        });
    }

    return connection;
}

module.exports = getConnection();