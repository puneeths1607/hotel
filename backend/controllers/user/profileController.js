const User = require("../../models/User");

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
};

// Delete User Account
exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Account Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting account" });
  }
};