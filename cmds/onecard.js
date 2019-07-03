//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');
const tarot = require('../carddecks/riderwaite.json');

async function onecard (args, message) {
  try{
    var deck = tarot.cards;
    /*if (args.length > 1){
      var deckName = args[1];
      deck = library.deckCheck(deckName);
    } else {
      deck = library.deckCheck(config.defaultDeck);
    }*/
    var cardMax = deck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var card = deck[random];
    message.channel.send(`Your card is ${card}.`);
    var meaning = book.checkBook(card);
    message.channel.send(meaning);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
