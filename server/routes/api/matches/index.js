const {Router} = require("express");
const router = Router();
const {createMatch, createPlayerInMatch, findMatchByTeam} = require("./matches.controller");

router.post("/", createMatch);
router.post("/:id/players", createPlayerInMatch);
router.get("/", findMatchByTeam);

module.exports = router;