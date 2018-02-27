// Load Library
const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');
//router.use(bodyParser.urlencoded({ extended: true }));
//router.use(bodyParser.json());
const _ = require('lodash');


// Load Data Model
const Driver = require('./../database/models/drivers');

// <-------- ROUTES --------->

// Sign Up (/d/signup)
router.post('/signup', (req, res) => {
  const address = _.pick(req.body, ['street1', 'street2', 'city', 'state', 'county', 'country', 'zip']);

  const driverData = _.pick(req.body, ['name', 'email', 'mobile', 'isDriving']);
  driverData['address'] = address;

  const driver = new Driver(driverData);

  driver.save()
   .then((user) => {
     res.status(200).send(driverData.email);
   })
   .catch(err => {
     res.status(500).send(err.message);
   })


});

//exports
module.exports = router;
