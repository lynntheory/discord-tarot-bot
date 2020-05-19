//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try {
    spread = JSON.stringify(spread);
    var spreads = JSON.parse(JSON.stringify(spreadIndex.index);
    if (spreads[spread] != undefined){
      var positions = spreadIndex[spread][2];
      var pullCount = spreadIndex[spread][3];
      return positions, pullCount;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
