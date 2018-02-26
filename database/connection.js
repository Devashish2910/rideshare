const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rideshare');

mongoose.connect()
 once('open', () => {
   console.log('Connected...');
 })
 on('error', err => {
   console.warn(err);
 });

module.exports = mongoose;
