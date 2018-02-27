// <----- Load Libraries ----->
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const _ = require('lodash');
const Driver = require('./../database/models/drivers');

// <-------- ROUTES --------->

// Sign Up (/d/signup)
router.post('/signup', (req, res) => {
  const address = _.pick(req.body, ['street1', 'street2', 'city', 'state', 'county', 'country', 'zip']);
  const driverData = _.pick(req.body, ['name', 'email', 'mobile', 'isDriving', 'licence']);
  driverData['address'] = address;

  const driver = new Driver(driverData);
  Driver.create(driver)
   .then((user) => {
     res.status(200).send(driverData);
   })
   .catch(err => {
     res.status(500).send({error: err.message});
   })
});

// Update Driver Address

// Update Driver Details
router.put('/update/:id', (req, res) => {
  const driverId = req.params.id;
  const address = _.pick(req.body, ['street1', 'street2', 'city', 'state', 'county', 'country', 'zip']);
  const driverData = _.pick(req.body, ['name', 'email', 'mobile', 'isDriving', 'licence']);

  if(!_.isEmpty(address)) {
    driverData['address'] = address;
  }

  Driver.findByIdAndUpdate({_id: driverId}, {$set: driverData}, {new: true, multi: true, runValidators: true})
   .then(updatedUser => {
     res.send(updatedUser);
   })
});

// Delete Driver
router.delete('/remove/:id', (req, res) => {
  Driver.findByIdAndRemove(req.params.id)
   .then(removedData => {
     res.status(204).send("Removed");
   })
   .catch(err => {
     res.status(500).send(err.message);
   })
});



// <-------- EXPORTS --------->
module.exports = router;
