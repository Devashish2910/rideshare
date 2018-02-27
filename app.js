const express = require('express');
const app = express();
const mongoose = require('./database/connection');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

module.exports = app;
