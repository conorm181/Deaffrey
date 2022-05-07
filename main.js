// Setup our environment variables via dotenv
require('dotenv').config()
// Import relevant classes from discord.js
const { Client, Intents, Guild } = require('discord.js');
// Instantiate a new client with some necessary parameters.
const client = new Client({ 
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILD_MEMBERS"] 
        
    }
);
//Accessing the message library
var clientMessage = require('./message.js');

// Notify progress
client.on('ready', function(e){
  console.log(`Logged in as ${client.user.tag}!`);
})
// Authenticate
client.login(process.env.DISCORD_TOKEN)

//Example Functionality
client.on('messageCreate', function(msg){clientMessage.sendResponse(msg)})
client.on('messageCreate', function(msg){
if(msg.content === "gc"){
    //const curGuild = JSON.stringify(Guild.fetch(msg.guild.id));
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    
    let fuck ="";
    const guild = client.guilds.resolve(Guilds[0]);
    // Fetch the members of the guild and log them
    const x = guild.members.fetch()
        .then(
            members => {
                members.forEach(member => {
                    fuck+=member.toString();
                    console.log(member.displayName);
                });
            }
        )
        .catch(console.error);
        
}
}
)