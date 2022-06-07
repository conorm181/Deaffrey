var moment = require('moment');
var file = require('./file.js');
var vol = {};
module.exports = {
    detectDeafen: function(oldState, newState) {
        try{

        //Join Deafen/Leave Deafen
        if(((oldState.channelId != newState.channelId) && newState.selfDeaf)){
            if(vol == undefined)
                vol = {};
            if(vol[newState.member.user.id]==undefined || vol[newState.member.user.id]== null)
            {
                //console.log("User Joined the channel deafened\n");
                vol[oldState.member.user.id.toString()] = {time:new moment()};
                console.log(oldState.member.user.username + " has deafened! at "+ vol[oldState.member.user.id].time);
                
            }
            else
            {
                //console.log("User left the channel while deaf");
                let temp = new moment().diff(vol[oldState.member.user.id].time, 'seconds');
                console.log(oldState.member.user.username + " has undeafened! after "+ temp);
                file.writeToFile(oldState.member.user.id,temp, oldState.member.user.username);
                vol[newState.member.user.id] = null;
                
            }
        }//Deafen
        else if(!oldState.selfDeaf && newState.selfDeaf){
            //console.log("User deafened in channel");
            if(vol == undefined)
                vol = {};
            vol[oldState.member.user.id.toString()] = {time:new moment()};
            console.log(oldState.member.user.username + " has deafened! at "+ vol[oldState.member.user.id].time);
            
        }//Undeafen/Leave Deafen
        else if(oldState.selfDeaf && !newState.selfDeaf){
            //console.log("The user undeafened in channel");
            let temp = new moment().diff(vol[oldState.member.user.id].time, 'seconds');
            console.log(oldState.member.user.username + " has undeafened! after "+ temp);
            file.writeToFile(oldState.member.user.id,temp, oldState.member.user.username);
            vol[oldState.member.user.id] = null;
            
        }


    }
    catch(e){
        console.log(e);
    }

        }
   
};