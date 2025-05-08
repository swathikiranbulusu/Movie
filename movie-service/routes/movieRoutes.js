const express = require('express');
const router = express.Router();
const {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movieController');

console.log('✅ movieRoutes loaded');

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie); // ✅ Only one POST route here
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
