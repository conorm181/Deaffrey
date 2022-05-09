var fs = require("fs");
const replace = require('replace-in-file');
module.exports = {

    readFile: function () {
        let data = "Username : Time Spent Deafened\n";
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
            info = line.split(',');
            data += info[0] + " : " + info[1] + "\n";
            });
        console.log(data);
        return data;
    },

    //username : string, timeSpentDeafened : TimeSpan (HH:MM:SS)
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

    checkLeaderStatus: function(){
        let unsortedLeaderboard = this.readFileIntoArray();
        let leaderboardHashmap = new Map();
        unsortedLeaderboard.forEach(line => {
            let pair = line.split(',');
            leaderboardHashmap.set(pair[0],pair[1].replace(/:/g,''));
        });
        let largest = 0
        for(let i = 0; i < leaderboardHashmap.size; i++)
        {
            if(leaderboardHashmap[i].value > largest)
                largest = leaderboardHashmap[i];
        }
        console.log(largest);
    }
};