//required files
const config = require('../config/config.json');

//carddecks import
const riderwaite = require('../carddecks/riderwaite.json');
const greenwood = require('../carddecks/greenwood.json');

const decks = {
  'Rider Waite': riderwaite,
  'Rider-Waite': riderwaite,
  'Greenwood': greenwood
};

module.exports.deckCheck = function(message) {
  for (var i = 0; i <= decks.length; i++) {
    if(message.content.match(decks[i])) {
      var deck = decks[i];
      return deck;
    } else {
      var deck = library.deckCheck(config.defaultDeck);
      return deck;
    }
  }
}
