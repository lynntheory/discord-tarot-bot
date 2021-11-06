//imports
const config = require('../config/config.json');
const crosses = require('../carddecks/lenormandCrosses.json');


module.exports.duoCheck = function(hand){
  let subject = hand[1];
  let modifier = hand[2];
  let subjectList = JSON.parse(JSON.stringify(crosses[subject]));
  let meaning = subjectList[modifier];
  return meaning;
}
