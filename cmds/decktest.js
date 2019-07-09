const library = require('../functions/deckCheck.js');

async function deckTest (args, message) {
  try{
    var answer = library.deckCheck(message);
    return answer;
  } catch (err) {
    console.log(err);
  }
}

module.exports = deckTest;
