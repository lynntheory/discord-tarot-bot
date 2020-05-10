//required files
const config = require('../config/config.json');
const deck = require('../functions/deckCheck.js');

//commands import
const oneCard = require('../cmds/onecard.js');
const threeCard = require('../cmds/threecard.js');
const threeLove = require('../cmds/threelove.js');
const fiveCard = require('../cmds/fivecard.js');
const fiveLove = require('../cmds/fivelove.js');
const fiveRelationship = require('../cmds/fiverelationship.js');
const compatibility = require('../cmds/compatibility.js');
const crossSpread = require('../cmds/crossspread.js');
const guideSpread = require('../cmds/guidespread.js');
const sevenDay = require('../cmds/sevenday.js');
const sixMonth = require('../cmds/sixmonth.js');
const twelveMonth = require('../cmds/twelvemonth.js');
const about = require('../cmds/about.js');
const refresh = require('../cmds/refresh.js');


const commands = {
  'one': oneCard,
  'time': threeCard,
  'three': threeCard,
  'threeLove': threeLove,
  'five': fiveCard,
  'fiveLove': fiveLove,
  'relationship': fiveRelationship,
  'compatibility': compatibility,
  'cross': crossSpread,
  'guide': guideSpread,
  'sevenDay': sevenDay,
  'sixMonth': sixMonth,
  'twelveMonth': twelveMonth,
  'about': about,
  'refresh': refresh
};

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    var currentDeck = deck.deckCheck(args[1]);
    console.log(currentDeck);
    return commands[args[0]](args, message, currentDeck);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
