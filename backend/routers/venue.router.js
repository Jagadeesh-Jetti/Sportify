const express = require("express");
const VenueRouter = express.Router();

const {
  createVenue,
  getVenueById,
  updateVenue,
  deleteVenue,
} = require("../controllers/venue.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

VenueRouter.get("/:id", authMiddleware, createVenue);

VenueRouter.post("/", authMiddleware, getVenueById);

VenueRouter.put("/:id", authMiddleware, updateVenue);

VenueRouter.delete("/:id", authMiddleware, deleteVenue);

module.exports = VenueRouter;
