import { request, expect } from '../helpers';

describe('Users Seeders', () => {
  describe('Seeder Rout GET /client/seed', () => {
    it('should CREATE USERS', (done) => {
      setTimeout(done, 300);
      request
        .get('/user/seed')
        .end((err, res) => {
          if (err) done(err);

          done();
        });
    });
  });
});
