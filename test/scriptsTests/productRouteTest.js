import { request, expect } from '../helpers';
import { defaultProduct } from '../../utils/constants';

describe('Product Routes', () => {
  describe('Rout POST /product/create', () => {
    it('should CREATE a product', (done) => {
      request
        .post('/product/create')
        .set('Content-Type', 'application/json')
        .send(defaultProduct)
        .end((err, res) => {
        //   expect(res.body[0].name).to.be.equal(defaultProduct.name);
          done();
        });
    });
  });

  describe('Rout PUT /product/update', () => {
    it('should UPDATE a product', (done) => {
      request
        .put('/product/update')
        .set('Content-Type', 'application/json')
        .send(defaultProduct)
        .end((err, res) => {
        //   expect(res.body[0].name).to.be.equal(defaultProduct.name);
          done();
        });
    });
  });

//   describe('Rout DELETE /product/remove', () => {
//     it('should REMOVE a product', (done) => {
//       request
//         .delete('/product/remove/')
//         .query({ name: defaultProduct.name })
//         .end((err, res) => {
//         //   expect(res.body[0].name).to.be.equal(defaultProduct.name);
//           done();
//         });
//     });
//   });

});
