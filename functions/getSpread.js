//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  console.log(`Spread: ${spread}`);
  var spreadList = spreadIndex[spread];
  if (spreadList[spread] != undefined) {
    var currentSpread = spreadIndex[spread];
    var positions = currentSpread[positions];
    var pullCount = currentSpread[pullCount];
    return positions, pullCount;
  } else {
    message.reply('Cannot recognize card spread.');
    return;
  }
}
