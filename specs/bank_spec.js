var assert = require('assert');
var Bank = require('../bank');

describe('Bank', function() {

  var bank = new Bank('Barclays', 10000);
  var accountHolderStub = {accountName: 'Mr Rich', balance: 15000};

  it('can be constructed', function() {
    assert.equal('Barclays', bank.name);
    assert.equal(10000, bank.lendingAmount);
  });

  it('can loan money', function() {
    bank.loanMoney(accountHolderStub, 1000);
    assert.equal(9000, bank.lendingAmount);
    assert.equal(16000, accountHolderStub.balance);
  });

  it("can't loan more than lending amount", function() {
    bank.loanMoney(accountHolderStub, 12000);
    assert.equal(9000, bank.lendingAmount);
  });

  it("can recieve loan payments", function() {
    bank.receivePayment(accountHolderStub, 3000);
    assert.equal(12000, bank.lendingAmount);
    assert.equal(13000, accountHolderStub.balance);
  });

})