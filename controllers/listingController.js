const Listing = require('../models/Listing');

exports.createListing = async (req, res) => {
  const { name, location, price, description, amenities, images, rooms, baths, type } = req.body;

  try {
    const newListing = new Listing({ name, location, price, description, amenities, images, rooms, baths, type });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Listing deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
