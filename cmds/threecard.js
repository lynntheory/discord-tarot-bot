//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const library = require('../functions/deckCheck.js');

const spread = ['past', 'present', 'future'];

async function threecard (args, message) {
  try{
    var deck = JSON.parse(JSON.stringify(library.deckCheck(message)));
    if (deck == undefined) {
      message.reply ("Error retrieving deck.");
    }
    var cardMax = deck.cards.length;
    var cards = [];
    while (cards.length <= 3) {
      var random = Math.floor(Math.random() * (cardMax - 1));
      var pull = deck.cards[random];
      if (cards.indexOf(pull) == -1) {
        cards.push(pull);
      }
    }
    for (var i = 0; i <= 2; i++) {
      message.channel.send(`Your card for the ${spread[i]} is ${cards[i]}.`);
      var meaning = book.checkBook(cards[i], deck);
      message.channel.send(meaning);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = threecard;
