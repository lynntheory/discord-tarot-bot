//imports
const config = require('../config/config.json');

module.exports.checkBook = function(item, currentDeck){
  try{
    var meaning = currentDeck[item];
    return meaning;
  } catch (err) {
    console.log(err);
  }
}
