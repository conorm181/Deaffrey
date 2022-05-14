var fs = require("fs");
var moment = require('moment');
const replace = require('replace-in-file');
var list = new Map();
module.exports = {

    readFile: function () {
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
                let kvp = line.split(',');
                list.set(kvp[0],moment.duration(kvp[1], 'seconds'));
            });
        return list;
    },

    //username : string, timeSpentDeafened : TimeSpan ('seconds')
    writeToFile: function (username, timeSpentDeafened){
        let curFile = this.readFileIntoArray();
        let lineToReplace = "";
        console.log(typeof curFile);
        curFile.forEach(line => {if(line.includes(username)) lineToReplace = line;});
        let newLine = username + "," + timeSpentDeafened;

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
                    console.log(key,value.as('seconds'));
                    sortedList.push("\n"+key+" : "+(value.as('minutes')).toFixed(2)+" minutes");
                }
              }
        }
        return sortedList;
    }
};