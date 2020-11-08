//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const spreadInfo = require('../functions/getSpread.js');

async function pull (message, args) {
  try{
    let spread = args[1];
    let currentDeck = deck.deckCheck(args[2]);
    let itemLabel = currentDeck.itemLabel;

    let spreadData = spreadInfo.getSpread(spread);
    let positions = spreadData.positions;
    let pullCount = spreadData.pullCount;


    var hand = [];
    hand = mechanics.itemPull(hand, pullCount, currentDeck);
    if (spread != "one"){
      for (var i = 0; i <= pullCount; i++) {
        var meaning = book.checkBook(hand[i], currentDeck);
        var imgPath = image.getImg(hand[i], currentDeck);
        //change terms for rune vs cards
          message.channel.send({embed: {
            title: `Your ${itemLabel} for the ${positions[i]} is ${hand[i]}.`,
            description: `Meaning: ${meaning}`,
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

module.exports = pull;
