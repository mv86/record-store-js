var assert = require('assert');
var Record = require('../record');

describe('Records', function() {

  record1 = new Record('Blur', 'Parklife', 3.00, 8.99, 5);

  it('can be constructed', function() {
    assert.equal('Blur', record1.artist)
    assert.equal('Parklife', record1.title)
    assert.equal(3.00, record1.buyPrice)
    assert.equal(8.99, record1.sellPrice)
    assert.equal(5, record1.quantity)
  })

})