const Review = require("../../models/Review");

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("userId")
      .populate("hotelId");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

// Delete review
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review" });
  }
};