//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/cardPull.js');
const spreadInfo = require('../functions/getSpread.js');

async function pull (message, spread, currentDeck) {
  try{
    var hand = [];
    var positions = [];
    var pullCount;
    spreadInfo.getSpread(message, spread, positions, pullCount);
    console.log(positions, pullCount);
    var cards = mechanics.cardPull(hand, pullCount, currentDeck);
    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i], currentDeck);
      var imgPath = image.getImg(cards[i], currentDeck);
      message.channel.send({embed: {
        title: `Your card for the ${positions[i]} is ${cards[i]}.`,
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

module.exports = pull;
