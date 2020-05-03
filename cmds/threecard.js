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
      var embed = new Discord.MessageEmbed()
        .setTitle(`Your card for the ${spread[i]} is ${cards[i]}.`)
        .setDescription(`${meaning}`)
        .setImage(`${imgPath}`)
        message.channel.send(`${embed}`);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = threecard;
