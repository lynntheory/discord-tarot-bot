//import deck
const tarot = require('../carddecks/riderwaite.json');


//import Config
const config = require('../config/config.json');

module.exports.checkBook = function(card){
  try{
    var meaning = tarot[card];
    return meaning;

  } catch (err) {
    console.log(err);
  }
}
 