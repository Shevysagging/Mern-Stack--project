const { Genre, validate } = require('../models/genreModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllGenre = catchAsync(async(req, res) => {
    const genres = await Genre.find().sort('bioData');
    res.send(genres);
});

exports.createGenre = catchAsync(async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        bioData: req.body.bioData,
        teamMates: req.body.teamMates,
        status: req.body.status,
        createdAt: req.body.createdAt
    });
    genre = await genre.save()

    res.send(genre);
});

exports.getGenreById = catchAsync(async(req, res) => {
    const genre= await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The Genre with given ID was not found');

    res.send(genre);
});

exports.updateGenre = catchAsync(async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

   const genre = await Genre.findByIdAndUpdate(req.params.id, {
    bioData: req.body.bioData, teamMates: req.body.teamMates, status: req.body.status, createdAt: req.body.createdAt}, {
        new: true
    });
    if (!genre) return res.status(404).send('The Genre with the given ID was not found');

    res.send(genre);
});

exports.deleteGenre = catchAsync(async(req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) return res.status(404).send('The Genre with the given ID was not found');

    res.send(genre);
});