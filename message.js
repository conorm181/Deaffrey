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
    }
};