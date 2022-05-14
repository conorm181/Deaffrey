var fs = require("fs");
var moment = require('moment');
const replace = require('replace-in-file');
const user = require('./User.js');
var list = new Map();
var listOfUsers = [];
module.exports = {

    readFile: function () {
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
                let data = line.split(',');
                list.set(data[1],data   [2]);
                let tempUser = new user(data[0],data[1],data[2]);
                listOfUsers.push(tempUser);
            });
            listOfUsers.forEach(function (user){console.log(user)});
        return listOfUsers;
    },

    //username : string, timeSpentDeafened : TimeSpan ('seconds')
    writeToFile: function (id, timeSpentDeafened){
        let curFile = this.readFileIntoArray();
        let lineToReplace = "";
        console.log(typeof curFile);
        curFile.forEach(line => {if(line.includes(id)) lineToReplace = line;});
        let userToUpdate = listOfUsers.find(user => user.ID === id);
        console.log(userToUpdate.TimeSpentDeafened + "," + timeSpentDeafened);
        let sum = (+userToUpdate.TimeSpentDeafened) + (+timeSpentDeafened);
        let newLine = userToUpdate.ID + "," + userToUpdate.Name + "," + sum;

        const options = {
            files: 'data.txt',
            from: lineToReplace,
            to: newLine,
          };

        try {
        const results = replace.sync(options);
            console.log('Replacement results:', results);
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
    },

    readFileIntoArray: function(){
        let data = [];
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
                data.push(line);
            });
        return data;
    },

    readFileIntoHashMap: function(){
        let data = new Map();
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
                let kvp = line.split(',');
                //console.log(kvp);
                data.set(kvp[0],moment.duration(kvp[1], 'seconds'));
            });
        return data;
    },

    getLeaderboard: function(){
        let arrayOfValues = [];
        let sortedList = [];
        for (const [key, value] of list) {
            arrayOfValues.push(value.as('seconds'));
          }
        arrayOfValues.sort(function(a, b){return b-a});
          console.log(arrayOfValues);
        for(const x of arrayOfValues){
            for (const [key, value] of list) {
                if(x === value.as('seconds'))
                {
                    sortedList.push("\n"+key+" : "+(value.as('minutes')).toFixed(2)+" minutes");
                }
              }
        }
        return sortedList;
    }
};