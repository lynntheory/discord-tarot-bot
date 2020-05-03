//imports
const config = require('../config/config.json');
const deck = require('../img/riderwaite/riderwaiteimg.json');

module.exports.getImg = function(card){
  try{
    var imgPath = deck[card];
    return imgPath;
  } catch (err) {
    console.log(err);
  }
}
