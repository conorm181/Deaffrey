var moment = require('moment');
var file = require('./file.js');
var vol = {};
module.exports = {
    detectDeafen: function(oldState, newState) {
        /*
        Debug Block
        console.log('-----------------------------------OldState----------------------------------------');
        console.log(oldState.id+' - '+oldState.selfDeaf);
        console.log('-----------------------------------NewState----------------------------------------');
        console.log(newState.id+' - '+newState.selfDeaf+'\n\n\n\n');
        */


        if(!oldState.selfDeaf && newState.selfDeaf){
            if(vol == undefined)
                vol = {};
            vol[oldState.member.user.id.toString()] = {time:new moment()};
            console.log(oldState.member.user.username + " has deafened! at "+ vol[oldState.member.user.id].time +"\n\n\n");
            

        }
        else if(oldState.selfDeaf && !newState.selfDeaf){
        //var diffInMinutes = date2.diff(date1, 'minutes');
        let temp = new moment().diff(vol[oldState.member.user.id].time, 'seconds');
            console.log(oldState.member.user.username + " has undeafened! after "+ temp +"\n\n\n");
            file.writeToFile(oldState.member.user.id,temp);
            //TODO check for new leader
            //TODO timespan diff for logging
        }
        }
   
};