const Discord = require('discord.js');
//imports
const config = require('../config/config.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/cardPull.js');
const spread = ['past', 'present', 'future'];

async function threecard (args, message) {
  try{
    var cards = [];
    var pullCount = 2;
    var cards = mechanics.cardPull(cards, pullCount);
    for (var i = 0; i <= pullCount; i++) {
      var meaning = book.checkBook(cards[i]);
      var imgPath = image.getImg(cards[i]);
      message.channel.send({embed: {
        title: `Your card for the ${spread[i]} is ${cards[i]}.`,
        description: `Card Meaning: ${meaning}`,
        image: `${imgPath}`
      }})
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = threecard;
