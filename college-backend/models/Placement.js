const mongoose = require('mongoose');

const PlacementSchema = new mongoose.Schema({
  year: Number,
  averagePackage: Number,
  highestPackage: Number,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Placement', PlacementSchema); 