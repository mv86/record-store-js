var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype = {
  inventoryCount: function() {
    return this.inventory.length;
  },
  addRecord: function(record) {
    this.inventory.push(record);
    this.balance -= (record.buy_price * record.quantity);
  }
}

module.exports = RecordStore;