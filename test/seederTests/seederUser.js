import { request, expect } from '../helpers';

describe('Users Seeders', () => {
  const defaultUser = {
    username: 'meupedidoauth',
    password: 'meupedidoauth2018',
  };

  describe('Seeder Rout GET /client/seed', () => {
    it('should CREATE USERS', (done) => {
      setTimeout(done, 300);
      request
        .get('/user/seed')
        .end((err, res) => {
          if (err) done(err);
          expect(res.body[0].name).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
});
