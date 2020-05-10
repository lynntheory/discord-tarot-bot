//imports
const config = require('../config/config.json');

//load image files
const riderwaite = require('../img/riderwaite/riderwaiteimg.json');

const imageFiles = {
  'riderwaite': riderwaite
}

module.exports.getImg = function(card, currentDeck){
  try{
    var imgPath;
    var deckName = currentDeck[deck];
    if (imageFiles[deckName] != undefined) {
      var index = imageFiles[deckName];
      imgPath = index[card];
    } else {
      imgPath = null;
    }
    return imgPath;
  } catch (err) {
    console.log(err);
  }
}
