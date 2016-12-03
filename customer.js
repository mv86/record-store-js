var Customer = function(name, age, favArtist, money) {
  this.name = name;
  this.age = age;
  this.favArtist = favArtist;
  this.money = money;
};

Customer.prototype = {
  browseRecords: function(recordShop) {
    var sales = 0;
    for (var record of recordShop.inventory) {
      if (this.favArtist === record.artist && this.money >= record.sellPrice) {
        this.money -= record.sellPrice;
        record.quantity -= 1;
        sales += record.sellPrice;
      }
    }
    recordShop.balance += sales;
  }
}

module.exports = Customer;