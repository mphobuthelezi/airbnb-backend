const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  amenities: [String],
  images: [String],
  rooms: { type: Number, required: true },
  baths: { type: Number, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Listing', ListingSchema);
