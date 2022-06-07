const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = {

    sendResponse: function (msg) {
        const variations = ["leaderboard","lb","board","table"];
        if(variations.includes(msg.content.toLowerCase()))
        {
            //Accessing the file library
            var file = require('./file.js');
            let output = "Username : Time Spend Deafened\n";

            //Message Embed
            const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor({ name: 'Deafen Leaderboard' });
            let userList = [];
            userList = file.getLeaderboard();
            //console.log(typeof userList);
            userList.forEach(user => {
                if(user===userList[0]){
                exampleEmbed.addFields(
                { name: 'Name', value: `${user.Name}`, inline: true },
                { name: 'Time Spend Deafened', value: `${user.timeParse()}`, inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
                )}else
                { 
                exampleEmbed.addFields(
                    { name: '\u200B', value: `${user.Name}`, inline: true },
                    { name: '\u200B', value: `${user.timeParse()}`, inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                )
                }
        });
            exampleEmbed.setTimestamp()
            msg.reply({ embeds: [exampleEmbed] });
        }        
    }
};