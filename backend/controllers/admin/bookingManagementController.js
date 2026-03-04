const Booking = require("../../models/Booking");

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId")
      .populate("hotelId");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    booking.status = req.body.status;
    await booking.save();

    res.json({ message: "Booking Updated", booking });
  } catch (error) {
    res.status(500).json({ message: "Error updating booking" });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
};