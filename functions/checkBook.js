//imports
const config = require('../config/config.json');

module.exports.checkBook = function(card, deck){
  try{
    var meaning = deck[card];
    return meaning;
  } catch (err) {
    console.log(err);
  }
}
