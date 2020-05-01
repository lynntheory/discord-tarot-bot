//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');
const spread = ["present", "problem", "change", "strengths", "weaknesses", "best outcome"];

async function guidespread (args, message) {
  try{
    var cards = [];
    var pullCount = 5;
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

module.exports = guidespread;
