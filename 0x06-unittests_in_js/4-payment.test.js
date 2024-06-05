const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let stub;
  let spy;

  this.beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  this.afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);
  
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
