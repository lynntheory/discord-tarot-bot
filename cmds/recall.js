//imports
const config = require('../config/config.json');
const db = require('../database/database.js');

async function recall (message, args) {
  try{
    var queryString = "SELECT * FROM logs WHERE ";
    let searchParam;
    args.shift();
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
    queryString = queryString.concat(args.join());
    console.log(queryString);
    db.searchDB(message, queryString);
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = recall;
