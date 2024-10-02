const express = require("express");
const VenueRouter = express.Router();

const {
  createVenue,
  getVenueById,
  updateVenue,
  deleteVenue,
} = require("../controllers/venue.controller");

VenueRouter.get("/:id", createVenue);

VenueRouter.post("/", getVenueById);

VenueRouter.put("/:id", updateVenue);

VenueRouter.delete("/:id", deleteVenue);

module.exports = VenueRouter;
