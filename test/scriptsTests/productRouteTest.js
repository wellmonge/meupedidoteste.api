import { request, expect } from '../helpers';

describe('Product Routes', () => {
  const defaultClient = {
    name: 'Boba Fetch',
  };

  describe('Rout POST /product/create', () => {
    it('should CREATE a product', (done) => {
      setTimeout(done, 300);
      request
        .post('/product/create')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body[0].name).to.be.equal(defaultClient.name);
          done();
        });
    });
  });

  describe('Rout PUT /product/update', () => {
    it('should UPDATE a product', (done) => {
      setTimeout(done, 300);
      request
        .put('/product/update')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body[0].name).to.be.equal(defaultClient.name);
          done();
        });
    });
  });

  describe('Rout DELETE /product/remove', () => {
    it('should REMOVE a product', (done) => {
      setTimeout(done, 300);
      request
        .delete('/product/remove/')
        .query({ name: defaultClient.name })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body[0].name).to.be.equal(defaultClient.name);
          done();
        });
    });
  });
});
