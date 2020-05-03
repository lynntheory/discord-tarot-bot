//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['your place/perspective', 'partner\'s place/perspective', 'the foundation of relationship', 'present state/issues', 'likely outcome'];

async function fiverelationship (args, message) {
  try{
    var cards = [];
    var pullCount = 4;
    var cards = mechanics.cardPull(cards, pullCount);
    for (var i = 0; i <= pullCount; i++) {
      message.channel.send(`Your card for the ${spread[i]} is ${cards[i]}.`);
      var meaning = book.checkBook(cards[i]);
      message.channel.send(meaning);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = fiverelationship;
