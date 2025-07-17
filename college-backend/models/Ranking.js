const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  year: Number,
  rank: Number,
  agency: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Ranking', RankingSchema); 