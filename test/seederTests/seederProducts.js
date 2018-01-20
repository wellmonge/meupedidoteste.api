import { request, expect } from '../helpers';

describe('Product Routes', () => {
  describe('Seeder Rout GET /product/seed', () => {
    it('should CREATE PRODUCTS', (done) => {
      setTimeout(done, 300);
      request
        .get('/product/seed')
        .end((err, res) => {
          if (err) done(err);
          // expect(res.body[0].name).to.be.equal(defaultClient.username);
          done();
        });
    });
  });
});
