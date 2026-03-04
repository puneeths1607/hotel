const Hotel = require("../../models/Hotel");

// Create Hotel
exports.createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Error creating hotel" });
  }
};

// Get All Hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
};

// Update Hotel
exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Error updating hotel" });
  }
};

// Delete Hotel
exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.json({ message: "Hotel Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting hotel" });
  }
};