//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');

async function onecard (args) {
  try{
    if (args.length > 1){
      let deck = library.deckCheck(args[1])
    } else {
      let deck = library.deckCheck(config.defaultDeck);
    }
    var cardMax = deck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var card = deck[random];
    message.channel.send(`Your card is ${card}.`);
    meaning = book.checkBook(card);
    message.channel.send(meaning);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
