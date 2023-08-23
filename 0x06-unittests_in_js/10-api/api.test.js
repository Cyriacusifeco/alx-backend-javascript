const axios = require('axios');
const { expect } = require('chai');

describe('GET /available_payments', () => {
  it('correct result', async () => {
    const response = await axios.get('http://localhost:7865/available_payments');
    expect(response.status).to.equal(200);
    const expectedData = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    expect(response.data).to.deep.equal(expectedData);
  });
});

describe('POST /login', () => {
  it('correct result', async () => {
    const userName = 'Betty';
    const response = await axios.post('http://localhost:7865/login', { userName });
    expect(response.status).to.equal(200);
    expect(response.data).to.equal(`Welcome ${userName}`);
  });
});
