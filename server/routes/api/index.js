const { Router } = require("express");
const auth = require("./auth");
const players = require("./players");
const matches = require("./matches");
const {authMiddleware} = require("../../middlewares/auth");

const router = Router();

router.use("/auth", auth);

router.use("/players", authMiddleware);
router.use("/players", players);

router.use("/matches", authMiddleware);
router.use("/matches", matches);

module.exports = router;