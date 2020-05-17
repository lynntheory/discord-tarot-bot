//required files
const config = require('../config/config.json');
const deck = require('../functions/deckCheck.js');

//commands import
const pull = require('../cmds/pull.js');
const about = require('../cmds/about.js');
const refresh = require('../cmds/refresh.js');


const commands = {
  'pull': pull,
  'about': about,
  'refresh': refresh
};

module.exports.check = function(message) {
  let args = message.content.slice(config.Prefix.length).split(" ");
  if (commands[args[0]] != undefined) {
    var spread = JSON.stringify(arg[1]);
    var currentDeck = deck.deckCheck(args[2]);
    return commands[args[0]](message, spread, currentDeck);
  } else {
    message.reply('This command does not exist!');
    return;
  }
}
