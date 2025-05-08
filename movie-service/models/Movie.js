const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  releaseYear: Number
});

module.exports = mongoose.model('Movie', MovieSchema);