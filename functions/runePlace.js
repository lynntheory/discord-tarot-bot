//imports
const config = require(`../config/config.json`);
const emoji = require(`../functions/getEmoji.js`);

var runeGrid = [[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]],[[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`],[`:black_large_square:`]]];

module.exports.runePlace = function (message, runes, pullCount, currentDeck) {

  var coordArray = [];
  coordArray[0] = new Array ();
  coordArray[1] = new Array ();
  for (var i = 0; i <= pullCount; i++) {
    var rCoord = Math.floor(Math.random() * 14);
    var cCoord = Math.floor(Math.random() * 14);
    for (var z = 0; z <= coordArray[0].length; z++) {
      if ((rCoord == coordArray[0][i]) && (cCoord == coordArray[1][i])){
        i--;
      } else {
        coordArray[0].push(rCoord);
        coordArray[1].push(cCoord);
        runeGrid[rCoord].splice(cCoord, 1, emoji.getEmoji(runes[i], currentDeck));
      }
    }
  }
  message.channel.send(`${runeGrid[0]} \n ${runeGrid[1]} \n ${runeGrid[2]}\n ${runeGrid[3]}\n ${runeGrid[4]}\n ${runeGrid[5]}\n ${runeGrid[6]}\n`);
  message.channel.send(`${runeGrid[7]}\n ${runeGrid[8]}\n ${runeGrid[9]}\n ${runeGrid[10]}\n ${runeGrid[11]}\n ${runeGrid[12]}\n ${runeGrid[13]}`);
  return runeGrid;
}
