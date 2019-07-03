//required files
const config = require('../config/config.json');

//carddecks import
const riderwaite = require('../carddecks/riderwaite.json');
const greenwood = require('../carddecks/greenwood.json');

const decks = {
  'Rider Waite': riderwaite,
  'Rider-Waite': riderwaite,
  'Greenwood': greenwood
}

module.exports.check = function(deckName) {
  if (decks[deckName[0]] != undefined) {
    var chosenDeck = decks[deckName[0]];
    return chosenDeck;
  } else {
    message.reply('This deck does not exist!');
    return;
  }
}
