import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server/src/main';

const { should } = chai.should();

chai.use(chaiHttp);
// Test error 404
describe('Error 404 test', () => {
  it('return error', () => {
    chai.request(server)
      .get('/notexist')
      .end((err, res) => {
        res.should.have.status(404);
      });
  });
});

describe('get all parcels', () => {
  it('get all parcels', () => {
    chai.request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        res.should.have.status(200);
      });
  });
});
