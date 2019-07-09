//required files
const config = require('../config/config.json');

//card decks import
const riderwaite = require('../carddecks/riderwaite.json');
const greenwood = require('../carddecks/greenwood.json');

var decks = {
  riderwaite,
  greenwood
};

module.exports.deckCheck = function(message) {
  var seeking = message.content.slice(message.content.indexOf(" ") + 1, message.length);
  console.log(seeking);
  var keys = Object.keys(decks).length;
  console.log(`${keys} decks loaded.`);
  for (var i = 0; i < keys; i++) {
    console.log('Hey Lynn it got here.');
    var deck = decks[i];
    console.log(name);
    if(seeking === name) {
      console.log('Deck found');
      let deck = decks[i];
      return deck;
    } else {
      var basic = config.defaultDeck;
      if(basic = decks[i].deck) {
        console.log('Default deck');
        let deck = decks[i];
        return deck;
      }
    }
  }
}