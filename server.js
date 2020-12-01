//external imports
const Express = require('express');
const app = Express();
const http = require('http');
const Discord = require('discord.js');
const client = new Discord.Client();

//internal imports
const config = require('./config/config.json');
const cmds = require('./functions/index.js');
const db = require('./database/database.js');

//cup of coffee
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
setInterval(function() {
    http.get(`http://discord-tarot-bot.herokuapp.com/`);
}, 300000);

client.on('ready', () => {
  //startup message
  console.log(`Discord Tarot Bot has started, with ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  //set activity presence for bot
  const presence = "for messages";
  client.user.setActivity(presence, { type: 'WATCHING' });
  db.connect();
});

client.on('message', async (message) =>{
  if (message.author.bot) return;
  if (message.content.startsWith(config.Prefix)) {
    cmds.check(message);
    return;
  }
});

client.login(process.env.SECRET);
