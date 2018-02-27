const express = require('express');
const app = express();
const mongoose = require('./database/connection');
//const bodyParser = require('body-parser');
const routes = require('./routes/routes');

routes(app);

module.exports = app;
