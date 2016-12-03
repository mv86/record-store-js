var assert = require('assert');
var Bank = require('../bank');

describe('Bank', function() {

  bank = new Bank('Barclays', 10000)

  it('can be constructed', function() {
    assert.equal('Barclays', bank.name);
    assert.equal(10000, bank.lendingAmount);
  });

  it('can loan money', function() {
    bank.loanMoney(1000);
    assert.equal(9000, bank.lendingAmount);
  });

  it("can't loan more than lending amount", function() {
    bank.loanMoney(12000);
    assert.equal(9000, bank.lendingAmount);
  });

  it("can recieve loan payments", function() {
    bank.receivePayment(3000);
    assert.equal(12000, bank.lendingAmount);
  })

})