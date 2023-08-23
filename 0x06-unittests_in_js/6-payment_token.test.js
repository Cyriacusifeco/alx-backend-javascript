const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with success message when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done(); // Call done to signal the end of the asynchronous test
      })
      .catch(error => done(error)); // If promise is rejected, call done with the error
  });

});
