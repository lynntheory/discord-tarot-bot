//imports
const config = require('../config/config.json');
const emoji = require('../functions/getEmoji.js');

module.exports.runeMat = function (runes, coordArray, pullCount) {

  for (var i = 0; i <= pullCount; i++){
    var pull = runes[i];
    var xCoord = coordArray[0][i];
    var yCoord = coordArray[1][i];
    var symbol = emoji.getEmoji(runes[i], currentDeck);
    runeGrid[xCoord][yCoord] = `${symbol}`;
  }
  return runeGrid;
}
