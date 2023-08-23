const request = require('supertest');
const app = require('./api'); // Use the exported app from api.js

describe('Cart page', () => {
  it('should return correct payment methods for valid cart ID', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .expect('Payment methods for cart 12', done);
  });

  it('should return 404 for non-numeric cart ID', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});
