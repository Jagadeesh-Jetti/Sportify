const Player = require("../models/player.model");

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

    if (player.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", player });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json({ message: "Players fetched successfully", players });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPlayerProfile = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: "Requested player not found" });
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
      res.status(404).json({ message: "Player not found to update" });
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
      res.status(404).json({ message: "Player not found to delete" });
    }
    res.status(200).json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPlayer,
  loginPlayer,
  getAllPlayers,
  getPlayerProfile,
  updatePlayerProfile,
  deletePlayerProfile,
};
