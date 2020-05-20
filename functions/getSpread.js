//imports
const config = require('../config/config.json');
const spreadIndex = require('../spreads/spreads.json');
var index = JSON.parse(spreadIndex);

module.exports.getSpread = function(message, spread, positions, pullCount){
  try {
    var spreads = index[index];
    if (spreads[spread] != undefined){
      var positions = index["spreads"][spread][positions];
      var pullCount = index["spreads"][spread][pullCount];
      return positions, pullCount;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
