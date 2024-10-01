const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
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
    venus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Venue" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
