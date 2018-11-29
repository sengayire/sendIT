import should from 'chai';
import chaiHttp from 'chai-http';

import server from '../src/main';

chai.use(chaiHttp);
// Test error 404
describe('Error 404 test', () => {
  chai.request(server)
    .get('/notexist')
    .end((err, res) => {
      res.should.have.status(404);
    });
});
