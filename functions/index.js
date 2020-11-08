//required files
const config = require('../config/config.json');
const deck = require('../functions/deckCheck.js');

//commands import
const pull = require('../cmds/pull.js');
const pullRunes = require('../cmds/pullRunes.js');
const castRunes = require('../cmds/castRunes.js');
const about = require('../cmds/about.js');
const refresh = require('../cmds/refresh.js');


const commands = {
  'pull': pull,
  'pullRunes': pullRunes,
  'castRunes': castRunes,
  'about': about,
  'refresh': refresh
};

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    return commands[args[0]](message, args);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
