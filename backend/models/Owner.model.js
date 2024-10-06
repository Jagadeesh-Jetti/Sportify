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

ownerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

ownerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;
