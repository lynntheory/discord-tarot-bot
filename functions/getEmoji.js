//imports
const config = require('../config/config.json');

//load image files
const runesemoji = require('../img/runes/runesemoji.json');

const imageFiles = {
  'runes': runesemoji
}

module.exports.getImg = function(card, currentDeck){
  try{
    var imgPath;
    var deckName = currentDeck.deck;
    if (imageFiles[deckName] != undefined) {
      var index = imageFiles[deckName];
      imgPath = index[card];
    } else {
      imgPath = ":white_large_square:";
    }
    return imgPath;
  } catch (err) {
    console.log(err);
  }
}
