//imports
const config = require('../config/config.json');
const emoji = require('../functions/getEmoji.js');

module.exports.runePlace = function (runes, runeGrid,pullCount) {
  var coordArray = [];
  coordArray[0] = new Array ();
  coordArray[1] = new Array ();
  for (var i = 0; i <= pullCount; i++) {
    var rCoord = Math.floor(Math.random() * 14);
    var cCoord = Math.floor(Math.random() * 14);
    for (var z = 0; z <= coordArray[0].length; z++) {
      if (rCoord == coordArray[0][i]) {
        if (cCoord == coordArray[1][i]) {
          i--;
        } else {
          coordArray[0].push(rCoord);
          coordArray[1].push(cCoord);
          var symbol = emoji.getEmoji(runes[i], currentDeck);
          runeGrid[rCoord][cCoord] = `${symbol}`;
        }
      }
    }
  }
  return runeGrid;
}
