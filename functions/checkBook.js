//imports
const config = require('../config/config.json');
const deck = require('../carddecks/riderwaite.json');

module.exports.checkBook = function(card){
  try{
    var meaning = deck[card];
    return meaning;
  } catch (err) {
    console.log(err);
  }
}
