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
  },
  buyStock: function(record, quantity) {
    this.balance -= (record.buyPrice * quantity);
    record.quantity += quantity;
  },
  findRecordByTitle: function(title) {
    var foundRecord = this.inventory.find(function(record) {
      return record.title === title;
    });
    if (foundRecord === undefined) {
      return "record not found";
    } else {
      return foundRecord;
    }
  },
  sellStock: function(record, quantity) {
      this.balance += (record.sellPrice * quantity);
      record.quantity -= quantity;
  }
};

module.exports = RecordStore;