const Joi = require('joi');
const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  movieCollection: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isPublished: {
    type: Boolean
  }
});

const Customer = mongoose.model('Customer', customerSchema);


function validateCustomer(customer) {
    const schema = {
        fullName: Joi.string().min(5).required(),
        movieCollection: Joi.string().min(5).required(),
        isPublished: Joi.boolean()
    };

    return Joi.validate(customer, schema);
}

exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validate = validateCustomer;