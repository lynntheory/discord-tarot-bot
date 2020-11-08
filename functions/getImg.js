//imports
const config = require('../config/config.json');

//load image files
const riderwaite = require('../img/rider-waite/riderwaiteimg.json');
const futhark = require('../img/runes/futharkimg.json');

const imageFiles = {
  'Rider Waite': riderwaite,
  'futhark': futhark
}

module.exports.getImg = function(card, currentDeck){
  try{
    var imgPath;
    var deckName = currentDeck.deck;
    if (imageFiles[deckName] != undefined) {
      var index = imageFiles[deckName];
      imgPath = index[card];
    } else {
      imgPath = "https://raw.githubusercontent.com/lynntheory/discord-tarot-bot/master/img/default.png";
    }
    return imgPath;
  } catch (err) {
    console.log(err);
  }
}
