const express = require("express");
const OwnerRouter = express.Router();
const {
  createOwner,
  loginOwner,
  getOwnerProfile,
  updateOwnerProfile,
} = require("../controllers/owner.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

OwnerRouter.post("/signup", createOwner);

OwnerRouter.post("/login", loginOwner);

OwnerRouter.get("/profile/:id", authMiddleware, getOwnerProfile);

OwnerRouter.put("/profile/:id", authMiddleware, updateOwnerProfile);

module.exports = OwnerRouter;
