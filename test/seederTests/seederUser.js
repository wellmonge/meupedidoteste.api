import { request, expect } from '../helpers';

describe('Users Seeders', () => {
  describe('Seeder Rout GET /user/seed', () => {
    it('should CREATE USERS', (done) => {
      setTimeout(done, 300);
      request
        .get('/user/seed')
        .end((err, res) => {
          if (err) done(err);
          // expect(res.body[0].name).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
});
