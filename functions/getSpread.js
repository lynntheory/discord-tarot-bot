//imports
const config = require('../config/config.json');

//load spreads
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try {
    console.log(spread);
    if (spreadIndex[spread] != undefined){
      var positions = spreadIndex[spread][positions];
      var pullCount = spreadIndex[spread][pullCount];
      return positions, pullCount;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
