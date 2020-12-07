# Tarot Bot for Discord
This is a Discord chatbot intended for performing tarot readings and other methods of fortune telling. Decks and spreads can be added via JSON files.

## Installation
1. Clone the repository, or download and extract the zip file (preferrably from the release page)
2. Make sure you have *npm* and *git* installed
3. Add *.env* file in the root folder containing: ``SECRET= your token here``
4. Run `npm install`
5. Run `npm start`

## Configuration
Store bot token in a .env file as ``SECRET= your token here``

In the ``config/config.json`` file, edit command prefix and other variables to match your Discord server.

Additional card decks and spreads can be added to the JSON files.

## Operation
All commands in the ``cmds`` folder require use of the prefix stored in the ``config/config.json`` file to trigger.

# Resources

**Discord** is all-in-one voice and text chat for gamers that's free, secure, and works online, on your desktop, and on your phone.

**[Discord.js](https://github.com/hydrabolt/discord.js/)**

**[the official Discord API documentation](https://discordapp.com/developers/docs/intro)**

**[Rider-Waite Card Images](https://www.sacred-texts.com/tarot/pkt/index.htm)**
