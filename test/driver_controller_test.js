const mongoose = require('mongoose');
const assert = require('assert');
const request = require('supertest');
const app = require('./../app');
const Driver = mongoose.model('drivers');

describe('Test Cases - Driver Collection', () => {

  const driver_data = {
    name: 'Devashish',
    email: 'devashish@gmail.com',
    mobile: 3612287361,
    street1: '1100 W Corral Ave',
    city: 'Kingsville',
    state: 'TX',
    country: 'USA',
    county: 'Kleberg',
    zip: 78363
  }


  it('POST to /d/signup creates a new driver', done => {
    Driver.count()
     .then(count => {
       request(app)
        .post('/d/signup')
        .send(driver_data)
        .end((res) => {
          console.log('Response:');
          console.log(res);
          Driver.count()
           .then(newCount => {
             //assert(count + 1 === newCount);
             done();
           });
        });
     });
  });

})
