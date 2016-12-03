var Bank = function(name, lendingAmount) {
  this.name = name;
  this.lendingAmount = lendingAmount;
};

Bank.prototype = {
  loanMoney: function(account, amount) {
    if (amount <= this.lendingAmount) {
      this.lendingAmount -= amount;
      account.balance += amount;
    } else if (this.lendingAmount > 0) {
      return this.notEnoughToLend;
    } else {
      return this.noFundsAvailable;
    };
  },
  receivePayment: function(account, amount) {
    if (account.balance < amount) {
      return this.notEnoughMoneyInAccount;
    } else {
      this.lendingAmount += amount;
      account.balance -= amount;
    }
  },
  notEnoughToLend: function() {
    "I'm sorry, we do not have that amount to lend. We have " + this.lendingAmount + " available. Would you like that instead?";
  },
  notEnoughToLend: function() { 
    "I'm sorry, we currently have no money to lend.";
  },
  notEnoughMoneyInAccount: function() {
    "I'm sorry, you don't have enough money in your account to complete this transaction";
  }
}

module.exports = Bank;