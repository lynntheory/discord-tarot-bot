//imports
const config = require('../config/config.json');
var fallback = config.defaultDeck;

//decks
const riderwaite = require('../carddecks/riderwaite.json');
const astrologian = require('../carddecks/astrologian.json');
const futhark = require('../carddecks/futhark.json');
const ogham = require('../carddecks/ogham.json');

const decks = {
  'rw': riderwaite,
  'rider': riderwaite,
  'riderwaite': riderwaite,
  'astro': astrologian,
  'ast': astrologian,
  'astrologian': astrologian,
  'futhark': futhark,
  'runes': futhark,
  'ogham': ogham
}

module.exports.deckCheck = function(deck){
  var currentDeck;
  if (decks[deck] != undefined) {
    currentDeck = decks[deck];
    return currentDeck;
  } else {
    currentDeck = fallback;
    return currentDeck;
  }
}
