var fs = require("fs");
const replace = require('replace-in-file');
module.exports = {

    readFile: function () {
        var data = "Username : Time Spent Deafened\n";
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
        var curFile = this.readFileIntoArray();
        var lineToReplace = "";
        console.log(typeof curFile);
        curFile.forEach(line => {if(line.includes(username)) lineToReplace = line;});
        var newLine = username + "," + timeSpentDeafened;

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
        var data = [];
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
                data.push(line);
            });
        return data;
    }
};