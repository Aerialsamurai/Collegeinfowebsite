const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  user: String,
  text: String,
  rating: Number,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema); 