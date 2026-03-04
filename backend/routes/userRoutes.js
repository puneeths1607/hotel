const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  deleteAccount
} = require("../controllers/user/profileController");

// Profile
router.get("/:id", getProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteAccount);

module.exports = router;