//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['preconceived idea', 'the present', 'the unnexpected', 'the near future', 'the distant future'];

async function fivecard (args, message) {
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

module.exports = fivecard;
