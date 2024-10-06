const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

playerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

playerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
