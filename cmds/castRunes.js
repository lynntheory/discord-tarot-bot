//imports
const config = require('../config/config.json');
const spreads = require('../spreads/runespread.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/runePull.js');
const coords = require('../functions/runePlace.js');
const spreadInfo = require('../functions/getRuneSpread.js');
const mat = require('../functions/runeMat.js');

async function castRunes (message, spread, currentDeck) {
  try{
    var hand = [];
    var pullCount = 8;
    var emptyGrid = [];
      var emptyGrid[0] = new Array ();
      var emptyGrid[1] = new Array ();
      var emptyGrid[2] = new Array ();
      var emptyGrid[3] = new Array ();
      var emptyGrid[4] = new Array ();
      var emptyGrid[5] = new Array ();
      var emptyGrid[6] = new Array ();
      var emptyGrid[7] = new Array ();
      var emptyGrid[8] = new Array ();
      var emptyGrid[9] = new Array ();
      var emptyGrid[10] = new Array ();
      var emptyGrid[11] = new Array ();
      var emptyGrid[12] = new Array ();
    for (var r = 0; r <= 13; r++){
      for (var c = 0; c <= 13; c++){
        emptyGrid[r][c] = ":black_large_square:";
      }
    }
    var runes = mechanics.runePull(hand, pullCount, currentDeck);
    coords.runePlace(runes, emptyGrid, pullCount);

    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i], currentDeck);
      var imgPath = image.getImg(cards[i], currentDeck);
      message.channel.send({embed: {
        title: `Your # ${i} rune is ${cards[i]}.`,
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
