const { Router } = require("express");
const auth = require("./auth");
const players = require("./players");
const authMiddleware = require("../../middlewares/auth");

const router = Router();

router.use("/auth", auth);

router.use("/players", authMiddleware);
router.use("/players", players);

module.exports = router;