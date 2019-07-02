//import deck
const deck = require('../carddeck/riderwaite.json');

//import Config
const config = require('../config/config.json');

async function threecard (message) {
  try{
    const cardMax = deck.cards.length();
    var cards = [];
    while (cards.length < 3) {
      var random = Math.floor(Math.random() * (cardMax.length - 1));
      var pull = deck.cards[random];
      if (cards.indexOf(pull) == -1) {
        cards.push(pull);
      }
    }
    message.channel.send(`Your card for the past is ${cards[0]}.`);
    message.channel.send(`Your card for the present is ${cards[1]}.`);
    message.channel.send(`Your card for the future is ${cards[2]}.`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = threecard;
