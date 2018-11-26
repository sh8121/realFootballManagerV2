const { Router } = require("express");
const router = Router();
const { createPlayer, findPlayerById, findPlayerByTeam, updatePlayer, deletePlayer } = require("./players.controller");

router.post("/", createPlayer);
router.get("/:id", findPlayerById);
router.get("/", findPlayerByTeam);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

module.exports = router;