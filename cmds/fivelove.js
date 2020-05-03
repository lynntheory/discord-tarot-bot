//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['you and current issues', 'past relationships/influences', 'issues you need to address', 'the areas you need to develop', 'the likely outcome'];

async function fivelove (args, message) {
  try{
    var hand = [];
    var pullCount = 4;
    var cards = mechanics.cardPull(hand, pullCount);
    for (var i = 0; i <= pullCount; i++) {
      message.channel.send(`Your card for the ${spread[i]} is ${cards[i]}.`);
      var meaning = book.checkBook(cards[i]);
      message.channel.send(meaning);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = fivelove;
