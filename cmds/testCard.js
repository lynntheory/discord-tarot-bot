//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');

async function testcard (args, message) {
  var seeking = message.content.slice(message.content.indexOf(" ")+1, message.length);
  var length = decks.keys;
  for (var key in decks){
    var name = decks[key].deck;
    if (seeking === name){
      let deck = decks[key];
    } else {
      var basic = config.defaultDeck;
      let deck = basic;
    }
    deck = JSON.parse(JSON.stringify(deck));
    var cardMax = deck.cards.length;
    var random = Math.floor(Math.random()*(cardMax-1));
    var card = deck.cards[random];
    message.channel.send(`Your card is ${card}.`);
    var meaning = deck[card];
    message.channel.send(meaning);
  }
}

module.exports = onecard;
