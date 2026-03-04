const User = require("../../models/User");
const Hotel = require("../../models/Hotel");
const Booking = require("../../models/Booking");
const Review = require("../../models/Review");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalHotels = await Hotel.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalReviews = await Review.countDocuments();

    res.json({
      totalUsers,
      totalHotels,
      totalBookings,
      totalReviews
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard Error" });
  }
};