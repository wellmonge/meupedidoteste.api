'use strict';

var _helpers = require('../helpers');

describe('Product Routes', function () {
  describe('Seeder Rout GET /product/seed', function () {
    it('should CREATE PRODUCTS', function (done) {
      _helpers.request.get('/product/seed').end(function (err) {
        if (err) done(err);
        // expect(res.body[0].name).to.be.equal(defaultClient.username);
        done();
      });
    });
  });
});