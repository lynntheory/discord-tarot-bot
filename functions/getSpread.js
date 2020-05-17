//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try{
    var currentSpread = JSON.parse(JSON.stringify(spreadIndex[spread]));
    var positions = currentSpread[positions];
    var pullCount = currentSpread[pullCount];
    return positions, pullCount;
  } catch (err) {
    console.log(err);
    message.reply('Cannot recognize card spread.');
    return;
  }
}
