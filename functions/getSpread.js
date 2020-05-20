//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, positions, pullCount){
  try {
    var spreads = JSON.parse(spreadIndex.index);
    if (spreads[spread] != undefined){
      var positions = JSON.parse(spreadIndex[spread][2]);
      var pullCount = JSON.stringify(spreadIndex[spread][3]);
      return positions, pullCount;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
