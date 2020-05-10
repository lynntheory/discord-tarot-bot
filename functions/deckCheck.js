//imports
const config = require('../config/config.json');
var fallback = config.defaultDeck;

//decks
const riderwaite = require('../carddecks/riderwaite.json');
const astrologian = require('../carddecks/astrologian.json');

const decks = {
  'rw': riderwaite,
  'rider': riderwaite,
  'riderwaite': riderwaite,
  'astro': astrologian,
  'ast': astrologian,
  'astrologian': astrologian
}

module.exports.deckCheck = function(deck){
  var currentDeck;
  if (decks[deck] != undefined) {
    currentDeck = JSON.parse(JSON.stringify(decks[deck]));
    return currentDeck;
  } else {
    currentDeck = JSON.parse(JSON.stringify(decks[fallback]));
    return currentDeck;
  }
}
