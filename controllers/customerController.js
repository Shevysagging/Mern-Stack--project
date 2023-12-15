const { Customer, validate } = require('../models/customerModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllCustomer = catchAsync(async (req, res) => {
    const customers = await Customer.find().sort('movieCollection');
    res.send(customers);
});

exports.createCustomer = catchAsync(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        fullName: req.body.fullName,
        movieCollection: req.body.movieCollection,
        isPublished: req.body.isPublished
    });
    customer = await customer.save()

    res.send(customer);
});

exports.getCustomerById = catchAsync(async (req, res) => {
    const customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).send('The customer with the given ID was not found');

    res.send(customer);
});

exports.updateCustomer = catchAsync(async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

   const customer = await Customer.findByIdAndUpdate(req.params.id, {
    fullName: req.body.fullName, movieCollection: req.body.movieCollection, isPublished: req.body.isPublished}, {
        new: true
    });
    if (!customer) return res.status(404).send('The customer with the given ID was not found');

    res.send(customer);
});

exports.deleteCustomer = catchAsync(async(req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found');

    res.send(customer);
});