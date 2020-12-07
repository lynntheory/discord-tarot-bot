//required files
const Express = require('express');
const app = Express();
const http = require('http');
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config/config.json');
const cmds = require('./functions/index.js');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
setInterval(function() {
    http.get(`http://discord-tarot-bot.herokuapp.com/`);
}, 300000);

client.on('ready', () => {
  console.log(`Discord Tarot Bot has started, with ${client.users.cache.size} users in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  const presence = "for messages";
  client.user.setActivity(presence, { type: 'WATCHING' });
});

client.on('message', async (message) =>{
  if (message.author.bot) return;
  if (message.content.startsWith(config.Prefix)) {
    cmds.check(message);
    return;
  }
});

client.login(process.env.SECRET);
