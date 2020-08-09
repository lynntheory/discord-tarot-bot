//imports
const config = require('../config/config.json');
var fallback = config.defaultDeck;

//decks
const riderwaite = require('../carddecks/riderwaite.json');
const astrologian = require('../carddecks/astrologian.json');
const runes = require('../carddecks/runes.json');

const decks = {
  'rw': riderwaite,
  'rider': riderwaite,
  'riderwaite': riderwaite,
  'astro': astrologian,
  'ast': astrologian,
  'astrologian': astrologian,
  'runes': runes
}

module.exports.deckCheck = function(deck){
  var currentDeck;
  if (decks[deck] != undefined) {
    currentDeck = decks[deck];
    return currentDeck;
  } else {
    currentDeck = decks[fallback];
    return currentDeck;
  }
}
