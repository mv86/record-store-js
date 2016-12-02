var Record = function(artist, title, buyPrice, sellPrice, quantity) {
  this.artist = artist;
  this.title = title;
  this.buyPrice = buyPrice;
  this.sellPrice = sellPrice;
  this.quantity = quantity;
};

module.exports = Record;