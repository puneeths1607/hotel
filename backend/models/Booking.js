const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel"
    },
    checkInDate: Date,
    checkOutDate: Date,
    totalPrice: Number,
    status: {
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);