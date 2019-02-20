'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

/* {
  count: 2,
  average: 5,
  highest: 'a',
  'a': 6,
  'b': 4
}
 */

describe('/GET request', () => {
  it('should return json response with status code 200', () => {
    return request(app)
      .get('/frequency')
      .query('s=helloworld')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.all.keys('count', 'average', 'highest');
      });
  });
});