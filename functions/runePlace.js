//imports
const config = require('../config/config.json');

module.exports.runePlace = function (pullCount) {
  var coordArray = [];
  coordArray[0] = new Array ();
  coordArray[1] = new Array ();
  for (var i = 0; i <= pullCount; i++) {
    var xCoord = Math.floor(Math.random() * 20);
    var yCoord = Math.floor(Math.random() * 20);
    for (var z = 0; z <= coordArray[0].length; z++) {
      if (xCoord == coordArray[0][i]) {
        if (yCoord == coordArray[1][i]) {
          i--;
        } else {
          coordArray[0].push(xCoord);
          coordArray[1].push(yCoord);
        }
      }
    }
  }
  return coordArray;
}
