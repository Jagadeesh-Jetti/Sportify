const Owner = require("../models/owner.model");

const createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json({ message: "Owner registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginOwner = async (req, res) => {
  try {
    const { email, password } = req.body;

    const owner = await Owner.findOne({ email });

    if (owner && owner.comparePassword(password)) {
      return res
        .status(404)
        .json({ message: "Owner not found, please signup" });
    }

    res.status(200).json({ message: "Player login successful", owner });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getOwnerProfile = async (req, res) => {
  try {
    const owner = Owner.findById(req.params.id);

    res.status(200).json({
      message: "Owner profile fetched successful",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOwnerProfile = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!owner) {
      return res.status(404).json({ message: "Owner not found to update" });
    }
    res.status(200).json({ message: "Owner is updated", owner });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOwnerProfile = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.parms.id);
    if (!owner) {
      res.status(404).json({ message: "Owner is not found " });
    }
    res.status(200).json({ message: "Owner is deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOwner,
  loginOwner,
  getOwnerProfile,
  updateOwnerProfile,
  deleteOwnerProfile,
};
