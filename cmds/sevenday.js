//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['today', 'tomorrow', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7', 'week overall'];

async function sevenday (args, message) {
  try{
    var hand = [];
    var pullCount = 7;
    var cards = mechanics.cardPull(hand, pullCount);
    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i]);
      var imgPath = image.getImg(cards[i]);
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

module.exports = sevenday;
