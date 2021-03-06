//imports
const config = require('../config/config.json');

//load image files
const runesemoji = require('../img/runes/runesemoji.json');

const imageFiles = {
  'futhark': runesemoji
}

module.exports.getEmoji = function(card, currentDeck){
  try{
    var emojiPath;
    var deckName = currentDeck.deck;
    if (imageFiles[deckName] != undefined) {
      var index = imageFiles[deckName];
      emojiPath = index[card];
      console.log(emojiPath);
    } else {
      emojiPath = ":white_large_square:";
    }
    return emojiPath;
  } catch (err) {
    console.log(err);
  }
}
