//imports
const config = require('../config/config.json');
const index = require('../img/rider-waite/riderwaiteimg.json');

module.exports.getImg = function(card){
  try{
    var imgPath = index[card];
    return imgPath;
  } catch (err) {
    console.log(err);
  }
}
