const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {

    sendResponse: function (msg) {
        if(msg.content === "leaderboard")
        {
            //Accessing the file library
            var file = require('./file.js');
            let output = "Username : Time Spend Deafened\n";
            //output += file.getLeaderboard().toString();


            //Message Embed
            const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: 'Deafen Leaderboard' });
            let userList = [];
            userList = file.getLeaderboard();
            console.log(typeof userList);
            userList.forEach(user => {exampleEmbed.addFields(
                { name: 'Name', value: `${user.Name}`, inline: true },
                { name: 'Time Spend Deafened', value: `${user.TimeSpentDeafened} seconds`, inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
            )});
            exampleEmbed.setTimestamp()
            msg.reply({ embeds: [exampleEmbed] });
        }
        else if(msg.content === "gc"){
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
    }
};