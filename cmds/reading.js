//imports
const config = require('../config/config.json');
const oneCard = require('../cmds/onecard.js');
const threeCard = require('../cmds/threecard.js');

const collector = message.channel.createMessageCollector(filter, { time: 15000 });

async function reading (message) {
  try{

    message.channel.send(`Hello, ${user}. I'm Tarot Card Bot, and I'm here to guide you through this reading. What sort of reading would you like? (One Card, Three Card)`);

    message.channel.send(`${reading} it is, then. And do you have a preference which tarot deck I use? (Rider Waite, Greenwood)`);

    message.channel.send(`${deck}. Sounds good.`);
    message.channel.send(`I'd like you to take a deep breath to center yourself. In... and out... if you have a specific intent for this tarot card reading, now is a good time to focus on that. Let me know when you are ready.`);


  } catch (err) {
    console.log(err);
  }
}

module.exports = reading;
