var Bank = function(name, lendingAmount) {
  this.name = name;
  this.lendingAmount = lendingAmount;
};

Bank.prototype = {
  loanMoney: function(amount) {
    if (amount <= this.lendingAmount) {
      this.lendingAmount -= amount;
    } else if (this.lendingAmount > 0) {
      console.log("I'm sorry, we do not have that amount to lend. We have " + this.lendingAmount + " available. Would you like that instead?")
    } else {
      console.log("I'm sorry, we currently have no money to lend.")
    };
  }
}

module.exports = Bank;