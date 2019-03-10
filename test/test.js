var assert = require('chai').assert
const Dollar = require("../src/Dollar");

describe('Cap 01', function() {
  it('Multiplicação Dólar', function() {
    dolar = new Dollar(5);
    dolar.times(2);
    assert.equal(dolar.amount, 10);
  });
});