const Venue = require("../models/venue.model");

const createVenue = async (req, res) => {
  try {
    const venue = new Venue(req.body);
    await venue.save();
    res.status(201).json({ message: "Venue created successfully", venue });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);

    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json({ message: "Venue fetched successfully", venue });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    res.status(200).json({ message: "Venue updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);

    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createVenue, getVenueById, updateVenue, deleteVenue };
