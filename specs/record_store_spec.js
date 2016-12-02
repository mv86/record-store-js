var assert = require('assert');
var RecordStore = require('../record_store');

describe('RecordStore', function() {

  beforeEach(function() {
  ricksRecords = new RecordStore('Ricks Records', 'London', 1500);
  recordStub = {artist: 'Blur', title: 'Parklife', buyPrice: 3, sellPrice: 8.99, quantity: 0}
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
    ricksRecords.buyRecord(recordStub, 5);
    assert.equal(1, ricksRecords.inventoryCount());
  });

  it('should decrease Record Store balance by record cost price when record brought', function() {
    ricksRecords.buyRecord(recordStub, 5);
    assert.equal(1485, ricksRecords.balance);
  });

  it('should add quantity of brought records to the record store quantity available', function() {
    ricksRecords.buyRecord(recordStub, 5);
    assert.equal(5, recordStub.quantity);
  })

  it('should be able to find record by title', function() {
    ricksRecords.buyRecord(recordStub);
    assert.equal(recordStub, ricksRecords.findRecordByTitle('Parklife'));
  })  

  it("should return 'record not found' for a record not in stock", function() {
    ricksRecords.buyRecord(recordStub, 5);
    assert.equal("record not found", ricksRecords.findRecordByTitle('Definately Maybe'));
  })

  it('should be able to sell a record', function() {
    ricksRecords.buyRecord(recordStub, 5);
    ricksRecords.sellRecord(recordStub, 1);
    assert.equal(1493.99, ricksRecords.balance);
    assert.equal(4, recordStub.quantity);
  })

});