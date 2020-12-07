//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const spreadInfo = require('../functions/getSpread.js');
const deck = require('../functions/deckCheck.js');

async function pull (message, args) {
  try{
    let spread = args[1];
    let currentDeck = deck.deckCheck(args[2]);
    let itemLabel = currentDeck.itemLabel;

    let spreadData;
    spreadData = spreadInfo.getSpread(message, spread, spreadData);
    let positions = spreadData.positions;
    let pullCount = spreadData.pullCount;


    var hand = [];
    hand = mechanics.itemPull(hand, pullCount, currentDeck);
    for (var i = 0; i < pullCount; i++) {
      var meaning = book.checkBook(hand[i], currentDeck);
      var imgPath = image.getImg(hand[i], currentDeck);
      if (pullcount = 1) {positionName = "pulled"} else {positions[i]};
      message.channel.send({embed: {
        title: `The ${positionName} ${itemLabel} is ${hand[i]}.`,
        description: `Meaning: ${meaning}`,
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
