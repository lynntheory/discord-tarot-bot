//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(spread, positions, pullCount){
  var spreadList = spreadIndex[spreads];
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
