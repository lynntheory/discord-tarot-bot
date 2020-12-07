//imports
const Discord = require('discord.js');
const { Sequelize, Model, DataTypes, QueryTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const config = require('../config/config.json');

const Log = sequelize.define('log', {
  readingID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  date: DataTypes.STRING,
  spread: DataTypes.STRING,
  deck: DataTypes.STRING,
  cards: DataTypes.STRING,
  name: DataTypes.STRING ,
  notes: DataTypes.STRING
});

module.exports.connect = function(){
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    Log.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports.logReading = function(args, spread, hand){
  //Command model: ^pull spread deck n name Note text goes here
  //retrieve deck
  let deck = args[2];
  //remove leading args
  let notesArr = args.splice(0, 3);

  //read for name in args list
  let name;
  if (notesArr[0] == "n" || "name" || "Name") {
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
  reading.save();
}

module.exports.searchDB = function(queryString){
    let results = makeQuery(queryString);
    let resCount = results.Result.rowCount;
    const formattedResult = new Discord.MessageEmbed();
      .setTitle('Query Results')
      .setDescription(`There are ${resCount} results.`)
    for (let i = 0; i<=resCount; i++) {
      let currResult = results[0][i];
      formattedResult.addFields({ name: `Result ${i}`, value: `${currResult.notes} Reading performed on ${currResult.date} for ${currResult.name}: ${currResult.cards}`});
    }
    console.log(formattedResult);
    return formattedResult;
}

async function makeQuery (queryString) {
  const results = await sequelize.query(queryString);
  console.log(results);
  return results;
}
