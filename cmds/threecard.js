//import deck
const tarot = require('../carddecks/riderwaite.json');

//import Config
const config = require('../config/config.json');

async function threecard (message) {
  try{
    var deck = tarot.cards;
    var cardMax = deck.length;
    var cards = [];
    while (cards.length <= 3) {
      var random = Math.floor(Math.random() * (cardMax - 1));
      var pull = deck[random];
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
