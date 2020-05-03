//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['current', 'month 2', 'month 3', 'month 4', 'month 5', 'month 6', 'month 7', 'month 8', 'month 9', 'month 10', 'month 11', 'month 12', 'overall'];

async function twelvemonth (args, message) {
  try{
    var hand = [];
    var pullCount = 12;
    var cards = mechanics.cardPull(hand, pullCount);
    for (var i = 0; i <= pullCount; i++) {
      message.channel.send(`Your card for the ${spread[i]} is ${hand[i]}.`);
      var meaning = book.checkBook(cards[i]);
      message.channel.send(meaning);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = twelvemonth;
