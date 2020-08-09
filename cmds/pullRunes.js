//imports
const config = require('../config/config.json');
const spreads = require('../spreads/runespread.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/runePull.js');
const spreadInfo = require('../functions/getRuneSpread.js');

var currentDeck = 'runes';

async function pullRunes (message, spread) {
  try{
    var hand = [];
    var spreadData;
    spreadData = spreadInfo.getRuneSpread(message, spread, spreadData);
    var positions = spreadData.positions;
    var pullCount = spreadData.pullCount;
    var runes = mechanics.runePull(hand, pullCount, currentDeck);
    if (spread != "one"){
      for (var i = 0; i <= pullCount; i++) {
        var meaning = book.checkBook(runes[i], currentDeck);
        var imgPath = image.getImg(runes[i], currentDeck);
          message.channel.send({embed: {
            title: `Your rune for the ${positions[i]} is ${runes[i]}.`,
            description: `Rune Meaning: ${meaning}`,
            image: {
              "url": `${imgPath}`
            }
          }})
        }}
    else {
      var meaning = book.checkBook(runes[0], currentDeck);
      var imgPath = image.getImg(runes[0], currentDeck);
      message.channel.send({embed: {
        title: `Your runes is ${cards[0]}.`,
        description: `Rune Meaning: ${meaning}`,
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
