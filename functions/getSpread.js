//imports
const config = require('../config/config.json');

//load spreads
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try {
    if (spreadIndex[spread] != undefined){
      console.log(spreadIndex[spread]);
      var spreadData = spreadIndex[spread];
      var positions = spreadData.positions;
      var pullCount = spreadData.pullCount;
      console.log(positions, pullCount);
      return positions, pullCount;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
