var assert = require('assert');
var RecordStore = require('../record_store');

describe('RecordStore', function() {

  ricksRecords = new RecordStore('Ricks Records', 'London', 1500);

  it('can be constructed', function() {
    assert.equal('Ricks Records', ricksRecords.name);
    assert.equal('London', ricksRecords.city);
    assert.equal(1500, ricksRecords.balance);
  });

  it('should start with an empty inventory', function() {
    assert.equal(0, ricksRecords.inventoryCount());
  });

});