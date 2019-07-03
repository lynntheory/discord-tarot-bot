//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');

const spread = [the past, the present, the future];

async function threecard (args) {
  try{
    if (args.length > 1){
      let deck = library.deckCheck(args[1])
    } else {
      let deck = library.deckCheck(config.defaultDeck);
    }
    var cardMax = deck.length;
    var cards = [];
    while (cards.length <= 3) {
      var random = Math.floor(Math.random() * (cardMax - 1));
      var pull = deck[random];
      if (cards.indexOf(pull) == -1) {
        cards.push(pull);
      }
    }
    for (var i = 0; i <= 2; i++) {
      message.channel.send(`Your card for ${spread[i]} is ${cards[i]}.`);
      var meaning = book.checkBook(cards[i]);
      message.channel.send(meaning);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = threecard;
