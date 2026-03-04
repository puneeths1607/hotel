const express = require("express");
const router = express.Router();

const Hotel = require("../models/Hotel");

// Get all hotels (Public)
router.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// Get single hotel
router.get("/:id", async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  res.json(hotel);
});

module.exports = router;