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

module.exports.deckCheck = function(deckName) {
  if (decks[deckName] != undefined) {
    var chosenDeck = decks[deckName];
    return chosenDeck;
  } else {
    console.log('This deck does not exist!');
    return;
  }
}
