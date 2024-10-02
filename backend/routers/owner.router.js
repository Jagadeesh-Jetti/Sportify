const express = require("express");
const OwnerRouter = express.Router();
const {
  createOwner,
  loginOwner,
  getOwnerProfile,
  updateOwnerProfile,
  deleteOwnerProfile,
} = require("../controllers/owner.controller");

OwnerRouter.get("/signup", createOwner);

OwnerRouter.post("/login", loginOwner);

OwnerRouter.get("/owner/all", function (req, res) {
  res.json({
    message: "get Owners list route",
  });
});

OwnerRouter.get("/profile", getOwnerProfile);

OwnerRouter.post("/profile", updateOwnerProfile);

OwnerRouter.delete("/profile", deleteOwnerProfile);

module.exports = OwnerRouter;
