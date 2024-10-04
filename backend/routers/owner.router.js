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

OwnerRouter.get("/profile", getOwnerProfile);

OwnerRouter.post("/profile", updateOwnerProfile);

module.exports = OwnerRouter;
