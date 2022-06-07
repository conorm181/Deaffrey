var moment = require('moment');
module.exports = class User {



    constructor(ID,Name,TimeSpentDeafened){
        this.ID = ID;
        this.Name = Name;
        this.TimeSpentDeafened = TimeSpentDeafened;
    }

    timeParse(){
        var t = moment.duration(this.TimeSpentDeafened,'seconds');
        if(this.TimeSpentDeafened<300)
            return this.TimeSpentDeafened + " seconds";
        else if(this.TimeSpentDeafened<7200)
            return t.minutes() + " minutes " + t.seconds() + " seconds";
        else if(this.TimeSpentDeafened<172800)
            return t.hours() + " hours " + t.minutes() + " minutes";
        else
            return t.days() + " days " + t.hours() + " hours";
    }
}