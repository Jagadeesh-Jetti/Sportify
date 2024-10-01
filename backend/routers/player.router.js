const express = require("express");
const PlayerRouter = express.Router();

PlayerRouter.get("/signup", function (req, res) {
  res.json({
    message: "sign up route",
  });
});

PlayerRouter.post("/login", function (req, res) {
  res.json({
    message: "Login route",
  });
});

PlayerRouter.get("/player/all", function (req, res) {
  res.json({
    message: "Players list route",
  });
});

PlayerRouter.get("/profile", function (req, res) {
  res.json({
    message: "Get Player profile route",
  });
});

PlayerRouter.post("/profile", function (req, res) {
  res.json({
    message: "Update player profile",
  });
});

PlayerRouter.delete("/profile", function (req, res) {
  res.json({
    message: "Delete player profile",
  });
});

PlayerRouter.post("/");

module.exports = PlayerRouter;
