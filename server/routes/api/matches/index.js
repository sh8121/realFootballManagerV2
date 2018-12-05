const {Router} = require("express");
const router = Router();
const {createMatch, createPlayerInMatch, findMatchByTeam, findPlayerByMatch} = require("./matches.controller");
const {verifyMatchIdMiddleware} = require("../../../middlewares/auth");


router.post("/", createMatch);
router.get("/", findMatchByTeam);

router.use("/:id/players", verifyMatchIdMiddleware);
router.post("/:id/players", createPlayerInMatch);
router.get("/:id/players", findPlayerByMatch)

module.exports = router;