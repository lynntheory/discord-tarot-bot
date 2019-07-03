//required files
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const Express = require('express');
const app = Express();

const config = require('./config/config.json');
const cmds = require('./functions/index.js');

//cup of coffee
setInterval(function() {
    http.get(`http://lynntheory-discord-tarot-bot.glitch.me/`);
}, 280000);

client.on('ready', () => {
  console.log(`Tarot Bot has started, with ${client.users.size} users in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  const presence = config.presence;
  setInterval(() => {
    const random = Math.floor(Math.random() * (presence.length - 1) + 1);
    client.user.setActivity(presence[random], { type: 'WATCHING' });
  }, 50000)
});

client.on('message', async (message) =>{
  if (message.author.bot) return;
  if (message.content.startsWith(config.Prefix)) {
    cmds.check(message);
    return;
  }
});

client.login(process.env.SECRET);
