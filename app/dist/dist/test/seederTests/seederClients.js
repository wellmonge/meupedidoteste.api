'use strict';

var _helpers = require('../helpers');

describe('Client Routes', function () {
  describe('Seeder Rout GET /client/seed', function () {
    it('should CREATE CLIENTS', function (done) {
      _helpers.request.get('/client/seed').end(function (err) {
        if (err) done(err);
        // expect(res.body[0].name).to.be.equal(defaultClient.username);
        done();
      });
    });
  });
});