const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when adding 1 and 3', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return -2 when adding -5 and 3', function() {
      expect(calculateNumber('SUM', -5, 3)).to.equal(-2);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when dividing 4.1 and 1.8', function() {
      expect(calculateNumber('DIVIDE', 4.1, 1.8)).to.equal(2);
    });
    it('should return "Error" when dividing 5 and 0', function() {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
    it('should return 1 when dividing 5.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 5.4, 4.5)).to.equal(1);
    });
  });

  describe('SUBTRACT', function() {
    it('should return 3 when subtracting 5.1 and 1.6', function() {
      expect(calculateNumber('SUBTRACT', 5.1, 1.6)).to.equal(3);
    });
    it('should return 0 when subtracting -4.9 and -5.1', function() {
      expect(calculateNumber('SUBTRACT', -4.9, -5.1)).to.equal(0);
    });
  });
});