//imports
const config = require('../config/config.json');
const corrections = require('../texthelp/riderwaite.json');

module.exports.texthelp = function(word){
  try{
    let list = corrections.list;
    var x = 0;
    var i;
    var status = 0;

    while (status = 0) {
      let words = list[x];
      if (words = null) {
        status = 2;
      }
      let length = words.length;
      for (i = 0; i < length; i++) {
        if (word = words[x]) {
          word = words[0];
          status = 1;
        }
      }
      if (status = 0) x++;
    }

    if (status = 2) {
      parse = null;
    }

    console.log(parse);
    return parse;
  } catch (err) {
    console.log(err);
  }
}
