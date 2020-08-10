//imports
const config = require('../config/config.json');
const spreads = require('../spreads/runespread.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/runePull.js');
const coords = require('../functions/runePlace.js');
const spreadInfo = require('../functions/getRuneSpread.js');
const emoji = require('../functions/getEmoji.js');

async function castRunes (message, spread, currentDeck) {
  try{
    var hand = [];
    var pullCount = 8;
    var runes = mechanics.runePull(hand, pullCount, currentDeck);
    coords.runePlace(message, runes, pullCount, currentDeck);

    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(runes[i], currentDeck);
      var imgPath = image.getImg(runes[i], currentDeck);
      var symbol = JSON.stringify(emoji.getEmoji(runes[i], currentDeck));
      message.channel.send({embed: {
        title: `Your ${symbol} rune is ${runes[i]}.`,
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

module.exports = castRunes;
