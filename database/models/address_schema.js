const mongoose = require('./../connection');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street1: String,
  street2: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  county: String,
  zip: {
    type: Number,
    required: true
  }
});


module.exports = AddressSchema;
