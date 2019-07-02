//required files
const config = require('../config/config.json');

//commands import
const oneCard = require('./onecard.js');
const threeCard = require('./threecard.js');

const commands = {
  'onecard': oneCard,
  'threecard': threeCard
}

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    return commands[args[0]](message);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}