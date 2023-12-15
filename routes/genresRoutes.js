const express = require('express');
const genreController = require('../controllers/genreController');
const router = express.Router();


router.route('/').get(genreController.getAllGenre).post(genreController.createGenre);
router.route('/:id').get(genreController.getGenreById).put(genreController.updateGenre).delete(genreController.deleteGenre);


module.exports = router;