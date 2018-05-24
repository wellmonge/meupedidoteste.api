
const { request }  = require('../helpers'); 

describe('Client Routes', () => {
  describe('Seeder Rout GET /client/seed', () => {
    it('should CREATE CLIENTS', done => {
      request.get('/client/seed').end(err => {
        if (err) done(err);
        // expect(res.body[0].name).to.be.equal(defaultClient.username);
        done();
      });
    });
  });
});