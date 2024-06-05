const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('should return status 200', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct body', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status 200 with the correct body', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 when the ID is not a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
