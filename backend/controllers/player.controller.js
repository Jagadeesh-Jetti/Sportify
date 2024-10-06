const Player = require("../models/player.model");
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");

dotEnv.config({
  path: ".env",
});

const JWT_SECRET = process.env.JWT_SECRET;

const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json({ message: "Player registered successfully", player });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginPlayer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const player = await Player.findOne({ email });

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    const isMatch = await player.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: player.email }, JWT_SECRET);
    res.status(200).json({ message: "Login successful", player, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPlayerProfile = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: "Player profile not found" });
    }
    res
      .status(200)
      .json({ message: "Player profile fetched successfully", player });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePlayerProfile = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!player) {
      return res.status(404).json({ message: "Player not found to update" });
    }
    res
      .status(200)
      .json({ message: "Player profile updated successfully", player });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePlayerProfile = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    if (!player) {
      return res.status(404).json({ message: "Player not found to delete" });
    }
    res.status(200).json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPlayer,
  loginPlayer,
  getPlayerProfile,
  updatePlayerProfile,
  deletePlayerProfile,
};
