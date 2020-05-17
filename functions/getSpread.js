//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try{
    var location = spreadIndex.findIndex(spread);
    console.log(spreadIndex[location][1]);
    console.log(spreadIndex[location][2]);
    var positions = spreadIndex[location][1];
    var pullCount = spreadIndex[location][2];
    return positions, pullCount;
  } catch (err) {
    console.log(err);
    message.reply('Cannot recognize card spread.');
    return;
  }
}
