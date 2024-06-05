const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved Promise with {data: "Successful response from the API" } when success is true', function() {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.eql({data: 'Successful response from the API'});
      done();
    }).catch((error) => {
      done(error);
    });
  });

  it('should return a resolved Promise with no data when success is false', function() {
    getPaymentTokenFromAPI(false).then((response) => {
      expect(response).to.be.undefined;
      done();
    }).catch((error) => {
      done(error);
    });
  });
});
