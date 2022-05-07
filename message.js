const Discord = require("discord.js");
module.exports = {

    sendResponse: function (msg) {
        if(msg.content === "leaderboard")
        {
            //Accessing the file library
            var file = require('./file.js');
            msg.reply(file.readFile());
        }
        else if(msg.content === "gc"){
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
                            console.log(member.user.username);
                        });
                    }
                )
                .catch(console.error);
                
        }
      /*  else if (msg.content === "g")
        {
            const embed = new Discord.RichEmbed() //Ver 11.5.1 of Discord.js
.setTitle("This is a title")
.setTitle("http://tryitands.ee")
.setDescription("This is a description")
.setTimestamp()
.setFooter("This is a footer")
.setAuthor("This is the author's name") //and this its profile pic)
.addField("This is a field", "this is its description")
.setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
.setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")

            msg.reply(embed);
        }*/
    }
};