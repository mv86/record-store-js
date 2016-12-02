var assert = require('assert');
var RecordStore = require('../record_store');

describe('RecordStore', function() {

  beforeEach(function() {
  ricksRecords = new RecordStore('Ricks Records', 'London', 1500);
  recordStub = {artist: 'Blur', title: 'Parklife', buy_price: 3, sell_price: 8.99, quantity: 5}
  });


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

  it('should decrease Record Store balance by record cost price', function() {
    ricksRecords.addRecord(recordStub);
    assert.equal(1485, ricksRecords.balance);
  })

});