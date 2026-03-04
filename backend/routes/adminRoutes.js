const express = require("express");
const router = express.Router();

const { getDashboardStats } = require("../controllers/admin/dashboardController");

const {
  getAllUsers,
  deleteUser,
  toggleBlockUser
} = require("../controllers/admin/userManagementController");

const {
  createHotel,
  getAllHotels,
  updateHotel,
  deleteHotel
} = require("../controllers/admin/hotelManagementController");

const {
  getAllBookings,
  updateBookingStatus,
  deleteBooking
} = require("../controllers/admin/bookingManagementController");

const {
  getAllReviews,
  deleteReview
} = require("../controllers/admin/reviewManagementController");

// Dashboard
router.get("/dashboard", getDashboardStats);

// User Management
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/block/:id", toggleBlockUser);

// Hotel Management
router.post("/hotels", createHotel);
router.get("/hotels", getAllHotels);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);

// Booking Management
router.get("/bookings", getAllBookings);
router.put("/bookings/:id", updateBookingStatus);
router.delete("/bookings/:id", deleteBooking);

// Review Management
router.get("/reviews", getAllReviews);
router.delete("/reviews/:id", deleteReview);

module.exports = router;