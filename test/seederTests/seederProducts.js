import { request } from '../helpers';

describe('Product Routes', () => {
  describe('Seeder Rout GET /product/seed', () => {
    it('should CREATE PRODUCTS', (done) => {
      request
        .get('/product/seed')
        .end((err) => {
          if (err) done(err);
          // expect(res.body[0].name).to.be.equal(defaultClient.username);
          done();
        });
    });
  });
});
