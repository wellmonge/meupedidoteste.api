import { request, expect } from '../helpers';

describe('Client Routes', () => {
  const defaultClient = {
    name: 'Boba Fetch',
  };
  describe('Seeder Rout GET /client/seed', () => {
    it('should CREATE CLIENTS', (done) => {
      setTimeout(done, 300);
      request
        .get('/client/seed')
        .end((err, res) => {
          if (err) done(err);
          //   expect(res.body[0].name).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
  describe('Rout POST /client/create', () => {
    it('should CREATE a client', (done) => {
      setTimeout(done, 300);
      request
        .post('/client/create')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          if (err) done(err);
          // expect(utils.decrypt(res.body[0].password)).to.be.eql(defaultUser.password);
          // expect(res.body[0].username).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
  describe('Rout PUT /client/update', () => {
    it('should UPDATE a client', (done) => {
      setTimeout(done, 300);
      request
        .put('/client/update')
        .set('Content-Type', 'application/json')
        .send(defaultClient)
        .end((err, res) => {
          if (err) done(err);
          // expect(utils.decrypt(res.body[0].password)).to.be.eql(defaultUser.password);
          // expect(res.body[0].username).to.be.equal(defaultUser.username);
          done();
        });
    });
  });
  describe('Rout DELETE /client/remove', () => {
    it('should REMOVE a client', (done) => {
      setTimeout(done, 300);
      request
        .delete('/client/remove/')
        .query({ name: defaultClient.name })
        .end((err, res) => {
          if (err) done(err);
          // expect(utils.decrypt(res.body[0].password)).to.be.eql(defaultUser.password);
          // expect(res.body[0].username).to.be.equal(defaultUser.username);
          done('Ok!');
        });
    });
  });
});
