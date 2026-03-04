const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    description: String,
    pricePerNight: Number,
    availableRooms: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);