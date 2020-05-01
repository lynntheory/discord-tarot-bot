//required files
const config = require('../config/config.json');

//commands import
const oneCard = require('../cmds/onecard.js');
const threeCard = require('../cmds/threecard.js');
const crossSpread = require('../cmds/crossspread.js');
const guideSpread = require('../cmds/guidespread.js');
const location = require('../cmds/about.js');
const refresh = require('../cmds/refresh.js');


const commands = {
  'one': oneCard,
  'time': threeCard,
  'three': threeCard,
  'cross': crossSpread,
  'guide': guideSpread,
  'about': about,
  'refresh': refresh
};

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    return commands[args[0]](args, message);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
