const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const app = express();
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieservice')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

// ✅ POST: Create a movie
app.post('/api/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET: List all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/movies/:id - Get one movie
app.get('/api/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Invalid ID or server error' });
  }
});

// PUT /api/movies/:id - Update movie
app.put('/api/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Invalid ID or server error' });
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`🎬 Movie Service running on port ${PORT}`));
