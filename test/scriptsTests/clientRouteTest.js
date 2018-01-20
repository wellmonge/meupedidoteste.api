import { request, expect } from '../helpers';
import { defaultClient } from '../../utils/constants';

describe('Client Routes', () => {
  const defaultClient = {
    name: 'Boba Fetch',
  };

  describe('Rout POST /client/create', () => {
    it('should CREATE a client', (done) => {
      request
        .post('/client/create')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          // expect(res.body[0].name).to.be.equal(defaultClient.name);
          done(err);
        });
    });
  });

  // describe('Rout PUT /client/update', () => {
  //   it('should UPDATE a client', (done) => {
  //     request
  //       .put('/client/update')
  //       .send(defaultClient)
  //       .end((err, res) => {
  //         // expect(res.body[0].name).to.be.equal(defaultClient.name);
  //         done();
  //       });
  //   });
  // });

  describe('Rout DELETE /client/remove', () => {
    it('should REMOVE a client', (done) => {
      request
        .delete('/client/remove')
        .query({ name: defaultClient.name })
        .end((err, res) => {
          // expect(res.body[0].name).to.be.equal(defaultClient.name);
          done();
        });
    });
  });
});
