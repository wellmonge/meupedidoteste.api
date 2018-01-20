import { request, expect } from '../helpers';
import { defaultProduct } from '../../utils/constants';

describe('Product Routes', () => {
  const productUpdated = 'Product updated';
  describe('Rout POST /product/create', () => {
    it('should CREATE a product', (done) => {
      request
        .post('/product/create')
        .set('Content-Type', 'application/json')
        .send(defaultProduct)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.Data.name).to.be.equal(defaultProduct.name, "Name's product matched!");
          done();
        });
    });
  });

  describe('Rout PUT /product/update', () => {
    it('should UPDATE a product', (done) => {
      request
        .put('/product/update')
        .set('Content-Type', 'application/json')
        .send({
          name: productUpdated,
          unitPrice: 23000,
          multiple: 2,
          oldName: defaultProduct.name,
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.Data.name).to.be.equal(productUpdated, "Name's product matched!");
          done();
        });
    });
  });

  describe('Rout DELETE /product/remove', () => {
    it('should REMOVE a product', (done) => {
      request
        .delete('/product/remove/')
        .query({ name: productUpdated })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(204);
          done();
        });        
    });
  });

});
