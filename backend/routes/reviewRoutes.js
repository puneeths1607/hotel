const express = require("express");
const router = express.Router();

const {
  addReview,
  getHotelReviews,
  deleteReview
} = require("../controllers/user/reviewController");

// Add review
router.post("/", addReview);

// Get reviews for hotel
router.get("/hotel/:hotelId", getHotelReviews);

// Delete review
router.delete("/:id", deleteReview);

module.exports = router;