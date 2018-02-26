// Import Controllers
const DriverController = require('./../controller/DriverController');
const RootController = require('./../controller/RootController');


module.exports = app => {
  // Root Routes
  // Routes on drivers
  app.use('/driver', DriverController);
}
