//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['current', 'month 2', 'month 3', 'month 4', 'month 5', 'month 6', 'overall'];

async function sixmonth (args, message, currentDeck) {
  try{
    var hand = [];
    var pullCount = 6;
    var cards = mechanics.cardPull(hand, pullCount, currentDeck);
    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i], currentDeck);
      var imgPath = image.getImg(cards[i], currentDeck);
      message.channel.send({embed: {
        title: `Your card for the ${spread[i]} is ${cards[i]}.`,
        description: `Card Meaning: ${meaning}`,
        image: {
          "url": `${imgPath}`
        }
      }})
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = sixmonth;
