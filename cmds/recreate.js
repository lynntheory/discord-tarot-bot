//imports
const config = require('../config/config.json');
const db = require('../database/database.js');

async function recreate (message, args) {
  try{
    message.reply('Not currently functioning');
  } catch (err) {
    console.log(err);
  }
}

module.exports = recreate;
