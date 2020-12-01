//imports
const config = require('../config/config.json');
const db = require('../database/database.js');

async function recall (message, args) {
  try{
    var queryString = "SELECT * FROM Logs WHERE ";
    let searchParam;
    args.shift();
    while (args.length){
      switch (args[0]){
        case 'name' || 'Name':
          queryString = queryString.concat('name = ');
          break;
        case 'date' || 'Date':
          queryString = queryString.concat('date = ');
          break;
        case 'note' || 'Note':
          queryString = queryString.concat('note = ');
          break;
        default:
          break;
      }
      args.shift();
      [searchParam,args] = textParser(args);
      queryString = queryString.concat(searchParam);
      if (args.length) {
        queryString = queryString.concat(" AND ");
      }
    }
    db.searchDB(message, queryString);
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = recall;

function textParser (args) {

}
