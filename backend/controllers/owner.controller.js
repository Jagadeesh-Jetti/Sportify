const Owner = require("../models/owner.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({
  path: ".env",
});

const JWT_SECRET = process.env.JWT_SECRET;

const createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json({ message: "Owner registered successfully", owner });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginOwner = async (req, res) => {
  try {
    const { email, password } = req.body;
    const owner = await Owner.findOne({ email });

    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    const isMatch = await owner.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: owner.email }, JWT_SECRET);
    res.status(200).json({ message: "Player login successful", owner, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getOwnerProfile = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);

    if (!owner) {
      res.status(404).json({ message: "Owner profile not found" });
    }

    res.status(200).json({
      message: "Owner profile fetched successful",
      owner,
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
    res.status(200).json({ message: "Owner is updated successfully", owner });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOwner,
  loginOwner,
  getOwnerProfile,
  updateOwnerProfile,
};
