import { request, expect } from '../helpers';
import { utils } from '../../utils/crypto'
import { fail } from 'assert';

describe('User Routes', function () {
  const defaultUser = {
    "username": "meupedidoauth",
    "password": "meupedidoauth2018"
  }
  describe('Rout Seeder', () => {
    it('should create a default users', () => {
      request
        .get("/user/seed")
        .end((err, res) => {
          console.log(res);          
          expect(res.body.username).to.be.eql("dsds");
          done(err);
        });
    });
  });
  describe('Rout GET /user/findall', () => {
    it('should return a list of users', () => {
      request
        .get("/user/findAll")
        .end((err, res) => {
          expect(utils.decrypt(res.body[0].password)).to.be.eql(defaultUsers.password);
          expect(res.body[0].username).to.be.equal(defaultUsers.username);
          done(err);
        });
    });
  });
});