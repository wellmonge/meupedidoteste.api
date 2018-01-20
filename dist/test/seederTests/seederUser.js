'use strict';

var _helpers = require('../helpers');

describe('Users Seeders', function () {
  describe('Seeder Rout GET /user/seed', function () {
    it('should CREATE USERS', function (done) {
      _helpers.request.get('/user/seed').end(function (err) {
        if (err) done(err);
        // expect(res.body[0].name).to.be.equal(defaultUser.username);
        done();
      });
    });
  });
});