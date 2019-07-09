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
  var seeking = message.content.slice(message.content.indexOf(" ") + 1, message.length);
  console.log(seeking);
  var length = decks.keys;
  for (var key in decks) {
    console.log('Hey Lynn it got here.')
    var name = decks[key].deck;
    console.log(name);
    if(seeking === name) {
      console.log('Deck found');
      let deck = decks[key];
      return deck;
    } 
  } 
  var basic = config.defaultDeck;
  console.log('Default deck');
  let deck = riderwaite;
  return deck;
}