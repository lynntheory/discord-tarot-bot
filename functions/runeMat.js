//imports
const config = require('../config/config.json');
const emoji = require('../functions/getEmoji.js');

module.exports.runeMat = function (runes, coordArray, pullCount) {
  var runeGrid = [];
  for (var r = 0; r <= 13; r++){
    for (var c = 0; c <= 13; c++){
      runeGrid[r][c] = ":black_large_square:";
    }
  }
  for (var i = 0; i <= pullCount; i++){
    var pull = runes[i];
    var xCoord = coordArray[0][i];
    var yCoord = coordArray[1][i];
    var symbol = emoji.getEmoji(runes[i], currentDeck);
    runeGrid[xCoord][yCoord] = `${symbol}`;
  }
  return runeGrid;
}
