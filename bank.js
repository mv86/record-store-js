var Bank = function(name, lendingAmount) {
  this.name = name;
  this.lendingAmount = lendingAmount;
};

Bank.prototype = {
  loanMoney: function(amount) {
    if (amount <= this.lendingAmount) {
      this.lendingAmount -= amount;
    } else if (this.lendingAmount > 0) {
      return this.notEnoughToLend;
    } else {
      return this.noFundsAvailable;
    };
  },
  receivePayment: function(amount) {
    this.lendingAmount += amount;
  },
  notEnoughToLend: function() {
    "I'm sorry, we do not have that amount to lend. We have " + this.lendingAmount + " available. Would you like that instead?";
  },
  notEnoughToLend: function() { 
    "I'm sorry, we currently have no money to lend.";
  }
}

module.exports = Bank;