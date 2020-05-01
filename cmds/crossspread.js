//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ["present", "problem", "past", "future", "conscious", "unconscious", "your influence", "external influence", "outcome"];

async function crossspread (args, message) {
  try{
    var cards = [];
    var pullCount = 9;
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

module.exports = crossspread;
