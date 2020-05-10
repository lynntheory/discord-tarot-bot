//imports
const config = require('../config/config.json');
const deck = require('../carddecks/riderwaite.json');

async function refresh (args, message, currentDeck) {
  try{
    var currentDeck = JSON.parse(JSON.stringify(deck.cards));
    message.channel.send(`Deck refreshed.`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = refresh;
