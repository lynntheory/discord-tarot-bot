//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/cardPull.js');

async function onecard (args, message, currentDeck) {
  try{
    var hand = [];
    var pullCount = 1;
    var cards = mechanics.cardPull(hand, pullCount, currentDeck);
    var meaning = book.checkBook(cards[0], currentDeck);
    var imgPath = image.getImg(cards[0], currentDeck);
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
