const express = require("express");
const PlayerRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createPlayer,
  loginPlayer,
  getPlayerProfile,
  updatePlayerProfile,
} = require("../controllers/player.controller");

PlayerRouter.post("/signup", createPlayer);

PlayerRouter.post("/login", loginPlayer);

PlayerRouter.get("/profile/:id", authMiddleware, getPlayerProfile);

PlayerRouter.put("/profile/:id", authMiddleware, updatePlayerProfile);

module.exports = PlayerRouter;
