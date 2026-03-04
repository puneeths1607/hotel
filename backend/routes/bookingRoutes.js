const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
  cancelBooking
} = require("../controllers/user/bookingController");

// Create booking
router.post("/", createBooking);

// Get bookings by user
router.get("/user/:userId", getUserBookings);

// Cancel booking
router.put("/cancel/:id", cancelBooking);

module.exports = router;