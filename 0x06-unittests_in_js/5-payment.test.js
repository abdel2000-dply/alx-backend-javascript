const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  this.beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  this.afterEach(() => {
    spy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
