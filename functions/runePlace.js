//imports
const config = require(`../config/config.json`);
const emoji = require(`../functions/getEmoji.js`);
const setup = require(`../img/runes/blankboard.json`);

module.exports.runePlace = function (message, runes, pullCount, currentDeck) {
  var runeGrid = JSON.parse(JSON.stringify(setup.template));
  var coordArray = JSON.parse(JSON.stringify(setup.coordArray));
  var symbol;

  for (var i = 0; i <= pullCount; i++) {
    var rCoord = Math.floor(Math.random() * 14);
    var cCoord = Math.floor(Math.random() * 14);
    if (runeGrid[rCoord][cCoord] == ":black_large_square:") {
      symbol = emoji.getEmoji(runes[i], currentDeck);
      runeGrid[rCoord][cCoord] == JSON.stringify(symbol);
    } else {
      i--;
    }
  }
  message.channel.send(`${runeGrid[0]}\n${runeGrid[1]}\n${runeGrid[2]}\n${runeGrid[3]}\n${runeGrid[4]}\n${runeGrid[5]}\n${runeGrid[6]}\n`);
  message.channel.send(`${runeGrid[7]}\n${runeGrid[8]}\n${runeGrid[9]}\n${runeGrid[10]}\n${runeGrid[11]}\n${runeGrid[12]}\n${runeGrid[13]}`);
  return runeGrid;
}
