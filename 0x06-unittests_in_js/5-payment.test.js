const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log correct total for 100 and 20', function() {
    calculateNumberStub.returns(120);

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledOnceWith('SUM', 100, 20));
    assert(consoleSpy.calledOnceWith('The total is: 120'));
  });

  it('should log correct total for 10 and 10', function() {
    calculateNumberStub.returns(20);

    sendPaymentRequestToApi(10, 10);

    assert(calculateNumberStub.calledOnceWith('SUM', 10, 10));
    assert(consoleSpy.calledOnceWith('The total is: 20'));
  });
});
