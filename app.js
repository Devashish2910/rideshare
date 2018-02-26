const express = require('express');
const app = express();
const db = require('./database/connection');

const DriverController = require('./controller/DriverController');
app.use('/driver', DriverController);

module.exports = app;
