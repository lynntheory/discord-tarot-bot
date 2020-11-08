//imports
const config = require('../config/config.json');

//load spreads
const spreadIndex = require('../spreads/spreads.json');
const positionNames = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first"];

module.exports.getSpread = function(message, spread, spreadData){
  try {
    let parsed = parseInt(spread, 10);
    if (spreadIndex[spread] != undefined){
      spreadData = spreadIndex[spread];
      return spreadData;
    } else if (parsed != 'NaN') {
      if (parsed > 1) {
        pullCount = parsed - 1;
      } else {
        pullCount = parsed;
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
