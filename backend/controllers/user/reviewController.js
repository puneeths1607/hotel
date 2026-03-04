const Review = require("../../models/Review");

// Add Review
exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};

// Get Reviews for a Hotel
exports.getHotelReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ hotelId: req.params.hotelId })
      .populate("userId");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review" });
  }
};