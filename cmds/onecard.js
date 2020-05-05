//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');

async function onecard (args, message) {
  try{
    var hand = [];
    var pullCount = 1;
    var cards = mechanics.cardPull(hand, pullCount);
    var meaning = book.checkBook(cards[0]);
    var imgPath = image.getImg(cards[0]);
    message.channel.send({embed: {
      title: `Your card is ${cards[0]}.`,
      description: `Card Meaning: ${meaning}`,
      image: {
        "url": `${imgPath}`
      }
    }})
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
