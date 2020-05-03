//imports
const config = require('../config/config.json');
const deck = require('../carddecks/riderwaite.json');

module.exports.cardPull = function (hand, pullCount) {
  var currentDeck = deck.cards;
  while (hand.length <= pullCount) {
    var cardMax = currentDeck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var pull = currentDeck[random];
    currentDeck.splice(currentDeck.indexOf(pull), 1 );
    var coin = Math.floor(Math.random() * 2);
    if (coin == 1) {
      pull = `${pull} Reversed`;
    }
    hand.push(pull);
  }
  currentDeck.length = 0;
  return hand;
}
