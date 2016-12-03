var assert = require('assert');
var Customer = require('../customer');

describe('Customer' , function() {

  customer = new Customer('Mr Smith', 29, 'Pulp', 21.00);

  it('can be constucted', function() {
    assert.equal('Mr Smith', customer.name);
    assert.equal(29, customer.age);
    assert.equal('Pulp', customer.favArtist);
    assert.equal(21.00, customer.money);
  });

});