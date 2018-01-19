import { request, expect } from '../helpers';

describe('Products Seeders', () => {
  describe('Seeder Rout GET /product/seed', () => {
    it('should CREATE PRODUCTS', (done) => {
      setTimeout(done, 300);
      request
        .get('/product/seed')
        .end((err, res) => {
          if (err) done(err);

          done();
        });
    });
  });
});
