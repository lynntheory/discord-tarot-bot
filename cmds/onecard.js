//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const mechanics = require('../functions/cardPull.js');

async function onecard (args, message) {
  try{
    var hand = [];
    var pullCount = 1;
    var cards = mechanics.cardPull(hand, pullCount);
    var meaning = book.checkBook(cards[i]);
    var imgPath = image.getImg(cards[i]);
    message.channel.send({embed: {
      title: `Your card for the ${spread[i]} is ${cards[i]}.`,
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
