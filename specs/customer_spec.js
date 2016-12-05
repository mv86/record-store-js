var assert = require('assert');
var Customer = require('../customer');
var RecordStore = require('../record_store');

describe('Customer' , function() {

  var customer1 = new Customer('Mr Smith', 29, 'Pulp', 21.00);
  var customer2 = new Customer('Mrs Johnson', 25, 'Radiohead', 26.00);
  var customer3 = new Customer('Ms Henderson', 41, 'Blur', 6.00);
  var customer4 = new Customer('Mr Bob', 19, 'Blur', 45.00);
  var ricksRecords = new RecordStore('Ricks Records', 'London', 1500);
  var recordStub = {artist: 'Blur', title: 'Parklife', buyPrice: 3, sellPrice: 8.99, quantity: 4}
  var recordStub2 = {artist: 'Blur', title: 'Blur', buyPrice: 4, sellPrice: 9.99, quantity: 7}
  var recordStub3 = {artist: 'Pulp', title: 'Different Class', buyPrice: 6, sellPrice: 11.49, quantity: 2}


  it('can be constucted', function() {
    assert.equal('Mr Smith', customer1.name);
    assert.equal(29, customer1.age);
    assert.equal('Pulp', customer1.favArtist);
    assert.equal(21.00, customer1.money);
  });

  it('customer buys record by favArtist', function() {
    ricksRecords.addRecord(recordStub);
    ricksRecords.addRecord(recordStub2);
    ricksRecords.addRecord(recordStub3);
    customer1.browseRecords(ricksRecords);
    assert.equal(9.51, customer1.money);
    assert.equal(1, recordStub3.quantity);
    assert.equal(1511.49, ricksRecords.balance);
  });

  it('customer buys different records from favArtist', function() {
    customer4.browseRecords(ricksRecords);
    assert.equal(26.02, customer4.money.toFixed(2));
    assert.equal(3, recordStub.quantity);
    assert.equal(6, recordStub2.quantity);
    assert.equal(1530.47, ricksRecords.balance);
  })

  it('custommer does not buy record if none by favArtist', function() {
    customer2.browseRecords(ricksRecords);
    assert.equal(26.00, customer2.money);
  });

  it("customer can't buy record by favArtist if insufficant funds", function() {
    customer3.browseRecords(ricksRecords);
    assert.equal(6.00, customer3.money);
  });

});