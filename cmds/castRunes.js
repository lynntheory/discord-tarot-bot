//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const coords = require('../functions/runePlace.js');
const emoji = require('../functions/getEmoji.js');

const currentDeck = require('../carddecks/futhark.json');

async function castRunes (message, args) {
  try{
    var hand = [];
    let pullCount = 9;
    let runes = mechanics.itemPull(hand, pullCount, currentDeck);
    coords.runePlace(message, runes, pullCount, currentDeck);

    for (var i = 0; i < pullCount; i++) {
      var meaning = book.checkBook(runes[i], currentDeck);
      var symbol = emoji.getEmoji(runes[i], currentDeck);
      var imgPath = image.getImg(runes[i], currentDeck);
      message.channel.send({embed: {
        title: `The ${symbol} rune is ${runes[i]}.`,
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
