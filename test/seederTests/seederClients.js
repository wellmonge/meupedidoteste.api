import { request, expect } from '../helpers';

describe('Client Routes', () => {
  describe('Seeder Rout GET /client/seed', () => {
    it('should CREATE CLIENTS', (done) => {
      setTimeout(done, 300);
      request
        .get('/client/seed')
        .end((err, res) => {
          if (err) done(err);
          // expect(res.body[0].name).to.be.equal(defaultClient.username);
          done();
        });
    });
  });
});
