const Joi = require('joi');
const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isMovie: {
    type: Boolean
  }
});

const Movie = mongoose.model('Movie', movieSchema);


function validateMovie(movie) {
    const schema = {
        fullName: Joi.string().min(5).required(),
        title: Joi.string().min(5).required(),
        isMovie: Joi.boolean()
    };

    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.Movie = Movie;
exports.validate = validateMovie;