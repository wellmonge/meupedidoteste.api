import { request } from '../helpers'
describe('Client Routes', function() {
  
  describe('Rout post /user/create', () =>{
    it('should return a list of users', () =>{
      request
        .post("/user/create")
        .send({
          "username": "meupedidoauth",
          "password": "meupedidoauth2018"
          })
        .set('Accept', /application\/json/)
        .expect(201)
        .end((err, res) =>{
          
          done(err);
        });
    });
  });
  
});