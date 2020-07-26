//imports
const config = require('../config/config.json');
const spreads = require('../spreads/runespread.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/runePull.js');
const spreadInfo = require('../functions/getRuneSpread.js');

async function pullRunes (message, spread, currentDeck) {
  try{
    var hand = [];
    var spreadData;
    spreadData = spreadInfo.getSpread(message, spread, spreadData);
    var positions = spreadData.positions;
    var pullCount = 8;
    var cards = mechanics.cardPull(hand, pullCount, currentDeck);
    if (spread != "one"){
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
        }}
    else {
      var meaning = book.checkBook(cards[0], currentDeck);
      var imgPath = image.getImg(cards[0], currentDeck);
      message.channel.send({embed: {
        title: `Your card is ${cards[0]}.`,
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

module.exports = pullRunes;
