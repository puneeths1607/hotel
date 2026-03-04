const Booking = require("../../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking" });
  }
};

// Get All Bookings of a User
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId })
      .populate("hotelId");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// Cancel Booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    booking.status = "Cancelled";
    await booking.save();

    res.json({ message: "Booking Cancelled", booking });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking" });
  }
};
