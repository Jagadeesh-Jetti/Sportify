const express = require("express");
const OwnerRouter = express.Router();

OwnerRouter.get("/signup", function (req, res) {
  res.json({
    message: "Owner signup route",
  });
});

OwnerRouter.post("/login", function (Req, res) {
  res.json({
    message: "Owner logged in",
  });
});

OwnerRouter.get("/owner/all", function (req, res) {
  res.json({
    message: "get Owners list route",
  });
});

OwnerRouter.get("/profile", function (req, res) {
  res.json({
    message: "Owner profile route",
  });
});

OwnerRouter.post("/profile", function (req, res) {
  res.json({
    message: "Update Owner profile",
  });
});

module.exports = OwnerRouter;
