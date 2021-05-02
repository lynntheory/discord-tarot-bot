//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const spreadInfo = require('../functions/getSpread.js');
const deck = require('../functions/deckCheck.js');

//input: ^lookup deck card
async function lookup (message, args) {
  try{
    let currentDeck = deck.deckCheck(args[1]);
    let itemLabel = currentDeck.itemLabel;
    args.splice(0, 2);
    let item = args.join(" ");

    var meaning = book.checkBook(item, currentDeck);
    var imgPath = image.getImg(item, currentDeck);
    message.channel.send({embed: {
      title: `The ${itemLabel} is ${hand[i]}.`,
      description: `Meaning: ${meaning}`,
      image: {
        "url": `${imgPath}`
      }
    }});
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = lookup;
