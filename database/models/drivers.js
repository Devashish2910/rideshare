const mongoose = require('./../connection');
const Schema = mongoose.Schema;
const AddressSchema = require('./address_schema');

const DriverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: false
  },
  address: AddressSchema,
  isDriving: {
    type: Boolean,
    default: false,
    required: true
  },
});

const Driver = mongoose.model('drivers', DriverSchema);

module.exports = Driver;
