const request = require('request');
const assert = require('chai').assert;
const app = require('./api');

describe('Index page', function() {
  const url = 'http://localhost:7865';

  it('correct status code?', function(done) {
    request.get(url, function(error, response, body) {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it('correct result?', function(done) {
    request.get(url, function(error, response, body) {
      assert.equal(body, 'Welcome to the payment system');
      done();
    });
  });

});
