module.exports = {

    detectDeafen: function(oldState, newState) {
        /*
        Debug Block
        console.log('-----------------------------------OldState----------------------------------------');
        console.log(oldState.id+' - '+oldState.selfDeaf);
        console.log('-----------------------------------NewState----------------------------------------');
        console.log(newState.id+' - '+newState.selfDeaf+'\n\n\n\n');
        */
        if(!oldState.selfDeaf && newState.selfDeaf)
            console.log(oldState.member.user.username + " has deafened!\n\n\n");
        else if(oldState.selfDeaf && !newState.selfDeaf)
            console.log(oldState.member.user.username + " has undeafened!\n\n\n");
        }
   
};