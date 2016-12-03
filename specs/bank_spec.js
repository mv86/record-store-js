var assert = require('assert');
var Bank = require('../bank');

describe('Bank', function() {

  bank = new Bank('Barclays', 10000)

  it('can be constructed', function() {
    assert.equal('Barclays', bank.name);
    assert.equal(10000, bank.lendingAmount);
  });

})