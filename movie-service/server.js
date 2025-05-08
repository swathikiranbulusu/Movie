const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect('mongodb://localhost:27017/movieservice')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

// Create movie
app.post('/api/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get movies
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
