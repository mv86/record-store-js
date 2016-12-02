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
  buyRecord: function(record, quantity) {
    this.inventory.push(record);
    this.balance -= (record.buy_price * quantity);
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
  }


  // sellRecord: function(record, quantity) {
  //   this.inventory.some(function(name === record.name) {

  //   }); 

  // }
}

module.exports = RecordStore;