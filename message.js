module.exports = {

    sendResponse: function (msg) {
        if(msg.content === "Dicklips"){
            msg.reply("Yep");
        }
        else if(msg.content === "Schan")
        {
            msg.reply("Lad");
        }
        else if(msg.content === "file contents")
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
    }
};