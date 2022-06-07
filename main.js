// Setup our environment variables via dotenv
require('dotenv').config()
// Import relevant classes from discord.js
const { Client, Intents, Guild } = require('discord.js');
// Instantiate a new client with some necessary parameters.
const client = new Client({ 
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, "GUILD_MEMBERS"] 
        
    }
);
/*import fetch from 'node-fetch';
fetch("https://w2g.tv/rooms/create.json", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "w2g_api_key": process.env.W2G_TOKEN,
        "share": "https://www.youtube.com/watch?v=8Wdp35Z-fRs",
        "bg_color": "#00ff00",
        "bg_opacity": "50"
    })
})
.then(response => response.json())
.then(function (data) {
    console.log("W2G: Here is your room! \n https://w2g.tv/rooms/" + data.streamkey);
});*/
//Accessing the libraries
var clientMessage = require('./message.js');
var vs = require('./voicestates.js');
var file = require('./file.js');
var fs = require('fs');
var util = require('util');

//Overload of console log to print to log file for debug
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;
console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
var output = "";
file.readFile();
//file.getLeaderboard();
// Notify progress
client.on('ready', function(e){
  console.log(`Logged in as ${client.user.tag}!`);

  let voiceLogs = {};

const Guilds = client.guilds.cache.map(guild => guild.id);
            //console.log(Guilds);
            
            let fuck ="";
            const guild = client.guilds.resolve(Guilds[0]);
            console.log(guild);
            // Fetch the members of the guild and log them
            const x = guild.members.fetch()
                .then(
                    members => {
                        members.forEach(member => {
                            output+=member.user.id + "," + member.user.username + "\n";
                            //console.log(member.user.username);
                        });
                    }
                )
                .catch(console.error);
})
// Authenticate
client.login(process.env.DISCORD_TOKEN)

//Example Functionality
client.on('messageCreate', function(msg){
    if(msg.content === "setup")
        msg.reply(output);
    else
        clientMessage.sendResponse(msg);
})

//Voicstate Listener
client.on("voiceStateUpdate", function(oldState, newState){vs.detectDeafen(oldState, newState)});
