const express = require("express");
const PlayerRouter = express.Router();
const {
  createPlayer,
  loginPlayer,
  getAllPlayers,
  getPlayerProfile,
  updatePlayerProfile,
  deletePlayerProfile,
} = require("../controllers/player.controller");

PlayerRouter.get("/signup", createPlayer);

PlayerRouter.post("/login", loginPlayer);

PlayerRouter.get("/profile", getPlayerProfile);

PlayerRouter.post("/profile", updatePlayerProfile);

module.exports = PlayerRouter;
