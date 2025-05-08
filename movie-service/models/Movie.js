const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  releaseYear: Number,
  director: String,
  description: String
});

module.exports = mongoose.model('Movie', movieSchema);
