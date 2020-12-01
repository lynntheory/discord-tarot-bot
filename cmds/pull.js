//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const spreadInfo = require('../functions/getSpread.js');
const deck = require('../functions/deckCheck.js');
const history = require('../database/database.js');

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

    // Opt out of logging
    if (!message.content.match(/logOff/i)) {
      history.logReading(args, spread, currentDeck, hand);
    }

    if (pullCount != 1){
      for (var i = 0; i <= pullCount; i++) {
        var meaning = book.checkBook(hand[i], currentDeck);
        var imgPath = image.getImg(hand[i], currentDeck);
          message.channel.send({embed: {
            title: `The ${positions[i]} ${itemLabel} is ${hand[i]}.`,
            description: `Meaning: ${meaning}`,
            image: {
              "url": `${imgPath}`
            }
          }})
        }}
    else {
      var meaning = book.checkBook(hand[0], currentDeck);
      var imgPath = image.getImg(hand[0], currentDeck);
      message.channel.send({embed: {
        title: `Your ${itemLabel} is ${hand[0]}.`,
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
