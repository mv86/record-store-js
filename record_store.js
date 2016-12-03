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
  deleteRecord: function(record) {
    for (item of this.inventory) {
      if (item.artist === record.artist && item.title === record.title) {
        var itemIndex = this.inventory.indexOf(item);
      }
      this.inventory.splice(itemIndex, 1);
    }
  },
  buyStock: function(record, quantity) {
    this.balance -= (record.buyPrice * quantity);
    record.quantity += quantity;
  },
  sellStock: function(record, quantity) {
      this.balance += (record.sellPrice * quantity);
      record.quantity -= quantity;
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
  sortStockByQuantity: function() {
    this.inventory.sort(function(record1, record2) {
      return record1.quantity - record2.quantity;
    });
  }
  // listInventory: function() {

  //   this.inventory.forEach(function(inventory) {
  //     con
  //   })
  // }
};

module.exports = RecordStore;