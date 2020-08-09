//imports
const config = require('../config/config.json');
const spreads = require('../spreads/runespread.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/runePull.js');
const coords = require('../functions/runePlace.js');
const spreadInfo = require('../functions/getRuneSpread.js');
const mat = require('../functions/runeMat.js');

var currentDeck = runes;

async function castRunes (message) {
  try{
    var hand = [];
    var positions = [];
    var pullCount = 8;
    var hand = mechanics.runePull(hand, pullCount, currentDeck);
    var coordArray = coords.runePlace(pullCount);
    var runeGrid = mat.runeMat(hand, coordArray, pullCount);

    message.channel.send(`${runeGrid[0]} \n ${runeGrid[1]} \n ${runeGrid[2]}\n ${runeGrid[3]}\n ${runeGrid[4]}\n ${runeGrid[5]}\n ${runeGrid[6]}\n ${runeGrid[7]}\n ${runeGrid[8]}\n ${runeGrid[9]}\n ${runeGrid[10]}\n ${runeGrid[11]}\n ${runeGrid[12]}\n ${runeGrid[13]}`);

    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i], currentDeck);
      var imgPath = image.getImg(cards[i], currentDeck);
      message.channel.send({embed: {
        title: `Your rune at the ${handEmogi[i]} is ${cards[i]}.`,
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
