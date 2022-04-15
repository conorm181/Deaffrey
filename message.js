module.exports = {

    sendResponse: function (msg) {
        if(msg.content === "Dicklips"){
            msg.reply("Yep");
        }
        else if(msg.content === "Schan")
        {
            msg.reply("Lad");
        }
    }
};