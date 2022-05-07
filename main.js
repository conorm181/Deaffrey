// Setup our environment variables via dotenv
require('dotenv').config()
// Import relevant classes from discord.js
const { Client, Intents, Guild } = require('discord.js');
// Instantiate a new client with some necessary parameters.
const client = new Client({ 
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, "GUILD_MEMBERS"] 
        
    }
);

//Accessing the libraries
var clientMessage = require('./message.js');
var vs = require('./voicestates.js');
var file = require('./file.js');

// Notify progress
client.on('ready', function(e){
  console.log(`Logged in as ${client.user.tag}!`);
})
// Authenticate
client.login(process.env.DISCORD_TOKEN)

//Example Functionality
client.on('messageCreate', function(msg){clientMessage.sendResponse(msg)})

//Voicstate Listener
client.on("voiceStateUpdate", function(oldState, newState){vs.detectDeafen(oldState, newState)});
