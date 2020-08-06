//imports
const config = require('../config/config.json');
const runeEmoji = require('../img/runes/runesemoji.json');

module.exports.runeMat = function (hand, coordArray, pullCount) {
  var runeGrid = [];
  for (var r = 0; r <= 13; r++){
    for (var c = 0; c <= 13; c++){
      runeGrid[r][c] = ":black_large_square:";
    }
  }
  for (var i = 0; i <= pullCount; i++){
    var pull = hand[i];
    var xCoord = coordArray[0][i];
    var yCoord = coordArray[1][i];
    runeGrid[xCoord][yCoord] = `${runeEmoji[pull]}`;
  }
  return runeGrid;
}
