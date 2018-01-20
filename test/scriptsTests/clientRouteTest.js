import { request, expect } from '../helpers';
import { defaultClient } from '../../utils/constants';

describe('Client Routes', () => {
  const clientUpdated = 'Client updated';
  describe('Rout POST /client/create', () => {
    it('should CREATE a client', (done) => {
      request
        .post('/client/create')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.Data.name).to.be.eql(defaultClient.name, "Name's client matched!");
          done();
        });
    });
  });

  describe('Rout PUT /client/update', () => {
    it('should UPDATE a client', (done) => {
      request
        .put('/client/update')
        .send({
          name: clientUpdated,
          oldName: defaultClient.name,
        })
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.Data.name).to.be.equal(clientUpdated, "Name's client matched!");
          done();
        });
    });
  });

  describe('Rout DELETE /client/remove', () => {
    it('should REMOVE a client', (done) => {
      request
        .delete('/client/remove')
        .query({ name: clientUpdated })
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(204);
          done();
        });
    });
  });
});
