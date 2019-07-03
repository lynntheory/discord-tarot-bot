//imports
const tarot = require('../carddecks/riderwaite.json');
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');

const spread = [the past, the present, the future];

async function threecard (message) {
  try{
    var deck = tarot.cards;
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
