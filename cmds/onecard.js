//import deck
const deck = require('../carddeck/riderwaite.json');

//import Config
const config = require('../config/config.json');

async function onecard (message) {
  try{
    const cardMax = deck.cards.length();
    var random = Math.floor(Math.random() * (cardMax.length - 1));
    var card = deck.cards[random];
    message.channel.send(`Your card is ${card}.`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = onecard;
