//imports
const config = require('../config/config.json');

//load spreads
const spreadIndex = require('../spreads/spreads.json');

module.exports.getSpread = function(message, spread, spreadData){
  try {
    if (spreadIndex[spread] != undefined){
      spreadData = spreadIndex[spread];
      return spreadData;
    } else {
      message.reply('Cannot recognize card spread.');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}
