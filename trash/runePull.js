//imports
const config = require('../config/config.json');

module.exports.runePull = function (hand, pullCount, currentDeck) {
  var activeDeck = JSON.parse(JSON.stringify(currentDeck.runes));
  while (hand.length <= pullCount) {
    var cardMax = activeDeck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var pull = activeDeck[random];
    activeDeck.splice(activeDeck.indexOf(pull), 1 );
    var coin = Math.floor(Math.random() * 2);
    if (coin == 1) {
      pull = `${pull} Reversed`;
    }
    hand.push(pull);
  }
  activeDeck.length = 0;
  return hand;
}
