const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 5 when inputs are 1.6 and 3.2', () => {
    assert.strictEqual(calculateNumber(1.6, 3.2), 5);
  });
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 6 when inputs are 1.8 and 4', () => {
    assert.strictEqual(calculateNumber(1.8, 4), 6);
  });
  it('should return -2 when inputs are 1.4 and -2.7', () => {
    assert.strictEqual(calculateNumber(1.4, -2.7), -2);
  });
});
