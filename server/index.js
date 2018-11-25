const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const bearerToken = require("express-bearer-token");

const config = require("./config");
const port = process.env.PORT || 3000;

const api = require("./routes/api");

const app = express();

app.use(bearerToken());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.set("jwt-secret", config.secret);

app.use("/", express.static(__dirname + "/../build"));
app.use("/api", api);

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});

require("./utils/dbConnection");