//imports
const config = require('../config/config.json');

module.exports.checkBook = function(card, currentDeck){
  try{
    var meaning = currentDeck[card];
    return meaning;
  } catch (err) {
    console.log(err);
  }
}
