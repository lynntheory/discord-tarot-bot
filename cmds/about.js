async function about (message) {
  try{
    message.channel.send(`This bot is designed to do tarot card pulls and relay card meanings to its users. It was created by Lynn Theory, lynntheory.com`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = about;
