require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import routes (to be created)
app.use('/colleges', require('./routes/colleges'));
app.use('/programs', require('./routes/programs'));
app.use('/testimonials', require('./routes/testimonials'));
app.use('/gallery', require('./routes/gallery'));
app.use('/recruiters', require('./routes/recruiters'));
app.use('/rankings', require('./routes/rankings'));
app.use('/placements', require('./routes/placements'));
app.use('/admissions', require('./routes/admissions'));
app.use('/fees', require('./routes/fees'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 