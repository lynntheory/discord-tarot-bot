//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['current', 'month 2', 'month 3', 'month 4', 'month 5', 'month 6', 'overall'];

async function sixmonth (args, message) {
  try{
    var hand = [];
    var pullCount = 6;
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

module.exports = sixmonth;
