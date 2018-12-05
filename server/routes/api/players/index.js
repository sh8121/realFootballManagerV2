const { Router } = require("express");
const router = Router();
const { createPlayer, findPlayerById, findPlayerByTeam, findMatchByPlayer, updatePlayer, deletePlayer } = require("./players.controller");
const { verifyPlayerIdMiddleware } = require("../../../middlewares/auth");

router.post("/", createPlayer);
router.get("/", findPlayerByTeam);
router.use("/:id", verifyPlayerIdMiddleware)
router.get("/:id", findPlayerById);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);
router.use("/:id/matches", verifyPlayerIdMiddleware);
router.get("/:id/matches", findMatchByPlayer)


module.exports = router;