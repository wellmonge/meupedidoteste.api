import { request, expect } from '../helpers';
import { utils } from '../../utils/crypto';
import { fail } from 'assert';

describe('User Routes', () => {
  const defaultUser = {
    "username": "meupedidoauth",
    "password": "meupedidoauth2018"
  }

  describe('Rout Create User', () => {
    it('should create a default user', (done) => {
      setTimeout(done, 300);
      request
        .get("/user/seed")
        .end((err, res) => {
          if (err) done(err);        
          expect(utils.decrypt(res.body[0].password)).to.be.eql(defaultUser.password);
          expect(res.body[0].username).to.be.equal(defaultUser.username);
          done();
        });
    });
  });

});