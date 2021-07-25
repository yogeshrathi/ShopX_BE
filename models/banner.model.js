const mongoose = require("mongoose");

const Banner = mongoose.model(
  "Banner",
  new mongoose.Schema({
    banner_name: String,
    imageUrl: String,
    description: String,
    isAvailable: Boolean,
  })
);

module.exports = Banner;