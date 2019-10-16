//required files
const config = require('../config/config.json');

//card decks import
const riderwaite = require('../carddecks/riderwaite.json');
const greenwood = require('../carddecks/greenwood.json');

const decks = {
  riderwaite,
  greenwood
};

module.exports.deckCheck = function(message) {
  var seeking = message.content.slice(message.content.indexOf(" ") + 1, message.length)
  if(seeking != undefined){
    console.log(seeking);
  } else {
    var seeking = config.defaultDeck;
    console.log (`No deck request found. Using default deck.`);
  }
  var length = decks.keys;
  for (var key in decks) {
    console.log('Hey Lynn it got here.')
    var name = decks[key].deck;
    console.log(name);
    if(seeking === name) {
      console.log('Deck found');
      let deck = decks[key];
    }
  }
  if(deck != undefined){
    console.log('Deck loaded');
  } else {
    console.log('Deck not found');
  }
  return deck;
}
