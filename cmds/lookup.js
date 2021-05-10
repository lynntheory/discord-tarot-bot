//imports
const config = require('../config/config.json');
const spreads = require('../spreads/spreads.json');
const book = require('../functions/checkBook.js');
const image = require('../functions/getImg.js');
const mechanics = require('../functions/itemPull.js');
const spreadInfo = require('../functions/getSpread.js');
const deck = require('../functions/deckCheck.js');
const utility = require('../functions/texthelp.js');

//load texthelp files
const riderwaite = require('../texthelp/riderwaite.json');

const textFiles = {
  'Rider Waite': riderwaite
}

//input: ^lookup deck card
async function lookup (message, args) {
  try{
    let currentDeck = deck.deckCheck(args[1]);
    let deckName = currentDeck.deck;
    let itemLabel = currentDeck.itemLabel;
    if (textFiles[deckName] != undefined) {
      var index = textFiles[deckName];
    } else {
      message.reply (`The deck you entered could not be matched to one on record. Please check your entry and try again.`);
    }
    args.splice(0, 2);
    let i = 0;
    let length = args.length;
    for (i; i < length; i++) {
      parse = utility.texthelp(args[i]);
      if (parse = null) return parse;
      args[i] = parse;
    }
    if (parse = null) {
      message.reply (`The phrase you entered could not be matched to an item. Please check your entry and try again.`);
    } else {
      let target = args.join(" ");
      var meaning = book.checkBook(target, currentDeck);
      var imgPath = image.getImg(item, currentDeck);
      message.channel.send({embed: {
        title: `The ${itemLabel} is ${hand[i]}.`,
        description: `Meaning: ${meaning}`,
        image: {
          "url": `${imgPath}`
        }
      }});
    }
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = lookup;
