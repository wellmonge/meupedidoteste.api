import { request } from '../helpers';

describe('Users Seeders', () => {
  describe('Seeder Rout GET /user/seed', () => {
    it('should CREATE USERS', (done) => {
      request
        .get('/user/seed')
        .end((err) => {
          if (err) done(err);
          // expect(res.body[0].name).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
});
