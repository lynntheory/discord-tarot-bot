//imports
const config = require('../config/config.json');
const deck = require('../carddecks/riderwaite.json');

async function refresh (args, message) {
  try{
    currentDeck = deck.cards;
    message.channel.send(`Deck refreshed.`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = refresh;
