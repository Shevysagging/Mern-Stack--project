const Joi = require("joi");
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    bioData: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    teamMates: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive', 'Positive', 'Negative']
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    },
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
    const schema = {
        bioData: Joi.string().min(5).required(),
        teamMates: Joi.string().min(5).required(),
        status: Joi.string().min(5).required(),
        createdAt: Joi.date()
    };
    return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;