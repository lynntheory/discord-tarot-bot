//imports
const config = require('../config/config.json');

module.exports.logReading(message, args, spread, currentDeck, hand){
  //Command model: ^pull spread deck n name Note text goes here
  //remove leading args
  let notesArr = args.splice(0, 3);

  //read for name in args list
  let name;
  if (notesArr[0] == "n") {
    name = notesArr[1];
    notesArr = notesArr.splice(0,2);
  } else {
    name = "unassigned";
  }
  //parse note text for String
  let notes = notesArr.join(" "); //What if no note added?
  //turn hand from array into symbol delimited String
  let cards = hand.join();
  
  //create Date mm/dd/year
  let d = new Date();
  let dateArr = [(d.getMonth() + 1), d.getDate(), d.getFullYear()];
  let date = dateArr.join("/");

  //actually put together and save
  var reading = Log.build({
    date: date,
    spread: spread,
    deck: deck,
    cards: cards,
    name: name,
    notes: notes
  });
  await reading.save();
}
