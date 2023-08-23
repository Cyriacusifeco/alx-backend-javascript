const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledOnceWith('SUM', 100, 20));

    calculateNumberSpy.restore();
  });
});
