//imports
const config = require('../config/config.json');

module.exports.itemPull = function (hand, pullCount, currentDeck) {
  var activeDeck = JSON.parse(JSON.stringify(currentDeck.items));
  while (hand.length < pullCount) {
    var cardMax = activeDeck.length;
    var random = Math.floor(Math.random() * cardMax);
    var pull = activeDeck[random];
    activeDeck.splice(activeDeck.indexOf(pull), 1 );
    if (currentDeck.reversals === "yes"){
      var coin = Math.floor(Math.random() * 2);
      if (coin == 1) {
        pull = `${pull} Reversed`;
      }
    }
    hand.push(pull);
  }
  activeDeck.length = 0;
  return hand;
}
