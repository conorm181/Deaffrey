var moment = require('moment');
module.exports = class User {



    constructor(ID,Name,TimeSpentDeafened){
        this.ID = ID;
        this.Name = Name;
        this.TimeSpentDeafened = TimeSpentDeafened;
    }

    timeParse(){
        var t = moment.duration(this.TimeSpentDeafened,'seconds');
        if(this.TimeSpentDeafened<60)
            return this.TimeSpentDeafened + "s";
        else if(this.TimeSpentDeafened<3600)
            return t.minutes() + "m " + t.seconds() + "s";
        else if(this.TimeSpentDeafened<86400)
            return t.hours() + "h " + t.minutes() + "m";
        else
            return t.days() + "d " + t.hours() + "h";
    }
}