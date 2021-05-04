//imports
const config = require('../config/config.json');
const corrections = require('../texthelp/riderwaite.json');

module.exports.texthelp = function(args){
  try{
    let list = corrections.list;
    //for each in corrections
      //if word = word, set to []1
      //return
    for (var i = 0, i <= list.length, i++) {
      
    }


    let target = args.join(" ");
    console.log(target);
    return target;
  } catch (err) {
    console.log(err);
  }
}
