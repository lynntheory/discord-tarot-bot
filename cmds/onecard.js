//import deck
const tarot = require('../carddecks/riderwaite.json');

//import Config
const config = require('../config/config.json');

async function onecard (message) {
  try{
    var deck = tarot.cards;
    var cardMax = deck.length;
    var random = Math.floor(Math.random() * (cardMax - 1));
    var card = deck[random];
    message.channel.send(`Your card is ${card}.`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
