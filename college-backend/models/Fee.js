const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
  amount: Number,
  year: Number,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Fee', FeeSchema); 