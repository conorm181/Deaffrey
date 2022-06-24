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
var fs = require('fs');
var util = require('util');
const message = require('./message.js');

//Overload of console log to print to log file for debug
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;
console.log = function(d) { //
  log_file.write(util.format.apply(null, arguments) + '\n');
  log_stdout.write(util.format.apply(null, arguments) + '\n');
};
console.error = console.log;
var output = "";
file.readFile();

// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`);
    const Guilds = client.guilds.cache.map(guild => guild.id);
            let fuck ="";
            const guild = client.guilds.resolve(Guilds[0]);
            // Fetch the members of the guild and log them
            const x = guild.members.fetch()
                .then(
                    members => {
                        members.forEach(member => {
                            output+=member.user.id + "," + member.user.username + "\n";
                        });
                    }
                ).catch(console.error);
    client.user.setStatus('invisible');
    console.log('Bot has launched with status "invisible"');
})

// Authenticate
client.login(process.env.DISCORD_TOKEN)

//Example Functionality
client.on('messageCreate', function(msg){
    else if(msg.member.user.id == '144562710363897856' || msg.member.user.id == '689217913005277282'){
        clientMessage.sendTable(msg);
    }
})

//Voicstate Listener
client.on("voiceStateUpdate", function(oldState, newState){vs.detectDeafen(oldState, newState)});
