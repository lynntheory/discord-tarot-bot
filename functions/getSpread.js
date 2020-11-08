//imports
const config = require('../config/config.json');

//load spreads
const spreadIndex = require('../spreads/spreads.json');
const positionNames = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first"];

module.exports.getSpread = function(message, spread, spreadData){
  try {
    if (spreadIndex[spread] != undefined){
      spreadData = spreadIndex[spread];
      return spreadData;
    } else if (typeof(spread) == 'number') {
      if (spread > 1) {
        pullCount = spread - 1;
      } else {
        pullCount = spread;
      }
      spreadData = {
        "name": "Custom",
        "positions": positionNames,
        "pullCount": pullCount
      };
      return spreadData;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
