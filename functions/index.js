//required files
const config = require('../config/config.json');

//commands import
const about = require('../cmds/about.js');
const oneCard = require('../cmds/onecard.js');
const threeCard = require('../cmds/threecard.js');

const commands = {
  'about': about,
  'onecard': oneCard,
  'threecard': threeCard
}

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    return commands[args[0]](args);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
