var assert = require('assert');
var RecordStore = require('../record_store');

describe('RecordStore', function() {

  // beforeEach(function() {
  // ricksRecords = new RecordStore('Ricks Records', 'London', 1500);
  // recordStub = {artist: 'Blur', title: 'Parklife', buyPrice: 3, sellPrice: 8.99}
  // recordStub2 = {artist: 'Blur', title: 'Blur', buyPrice: 4, sellPrice: 9.99}
  // recordStub3 = {artist: 'Pulp', title: 'Different Class', buyPrice: 6, sellPrice: 11.49}
  // });

  ricksRecords = new RecordStore('Ricks Records', 'London', 1500);
  recordStub = {artist: 'Blur', title: 'Parklife', buyPrice: 3, sellPrice: 8.99, quantity: 0}
  recordStub2 = {artist: 'Blur', title: 'Blur', buyPrice: 4, sellPrice: 9.99, quantity: 7}
  recordStub3 = {artist: 'Pulp', title: 'Different Class', buyPrice: 6, sellPrice: 11.49, quantity: 2}


  it('can be constructed', function() {
    assert.equal('Ricks Records', ricksRecords.name);
    assert.equal('London', ricksRecords.city);
    assert.equal(1500, ricksRecords.balance);
  });

  it('should start with an empty inventory', function() {
    assert.equal(0, ricksRecords.inventoryCount());
  });

  it('should be able to add a record to the inventory', function() {
    ricksRecords.addRecord(recordStub);
    assert.equal(1, ricksRecords.inventoryCount());
  });

  it('should be able to delete a record from the inventory', function() {
    ricksRecords.addRecord(recordStub2);
    ricksRecords.deleteRecord(recordStub);
    assert.equal(1, ricksRecords.inventoryCount());
    assert.equal('Blur', ricksRecords.inventory[0].title);
  })

  it('should be able to buy stock and add to inventory, updating quantity available', function() {
    ricksRecords.addRecord(recordStub);
    ricksRecords.buyStock(recordStub, 5);
    assert.equal(1485, ricksRecords.balance);
    assert.equal(5, recordStub.quantity);
  });

  it('should be able to sell stock', function() {
    ricksRecords.sellStock(recordStub, 1);
    assert.equal(1493.99, ricksRecords.balance);
    assert.equal(4, recordStub.quantity);
  });

  it('should be able to find record by title', function() {
    assert.equal(recordStub, ricksRecords.findRecordByTitle('Parklife'));
  }); 

  it("should return 'record not found' for a record not in stock", function() {
    assert.equal("record not found", ricksRecords.findRecordByTitle('Definately Maybe'));
  });

  it('should be able to sort records by order of quantity', function() {
    ricksRecords.addRecord(recordStub3);
    ricksRecords.sortStockByQuantity();
    assert.equal(recordStub3, ricksRecords.inventory[0]);
  });

  it("should list the inventory onto the terminal", function() {
    assert.equal(undefined, ricksRecords.listInventory());
  });

});