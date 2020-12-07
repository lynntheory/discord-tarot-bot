//imports
const config = require('../config/config.json');
const db = require('../database/database.js');

async function recall (message, args) {
  try{
    var queryString = "SELECT * FROM logs";
    let searchParam;
    args.shift();
    switch (args[0]){
      case 'name' || 'Name':
        queryString = queryString.concat(' WHERE name = ');
        break;
      case 'date' || 'Date':
        queryString = queryString.concat(' WHERE date = ');
        break;
      case 'note' || 'Note':
        queryString = queryString.concat(' WHERE note = ');
        break;
      default:
        queryString = queryString.concat(' LIMIT 10');
        console.log('No further specification found.');
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
