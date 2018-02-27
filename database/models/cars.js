const mongoose = require('./../connection');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  driver: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'drivers'
  },
  reg_number: String,
  type: String,
  model: String,
  color: String,
  mfg_year: Number,
  isActive: Boolean,
});

const Car = mongoose.model('cars', CarSchema);

module.exports = Car;
