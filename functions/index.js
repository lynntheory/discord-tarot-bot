//required files
const config = require('../config/config.json');

//commands import
const pull = require('../cmds/pull.js');
const castRunes = require('../cmds/castRunes.js');
const about = require('../cmds/about.js');
const refresh = require('../cmds/refresh.js');
const lookup = require('../cmds/lookup.js');


const commands = {
  'pull': pull,
  'castRunes': castRunes,
  'about': about,
  'refresh': refresh,
  'lookup': lookup
};

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    return commands[args[0]](message, args);
    // !pull time ast // !pull one futhark
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
