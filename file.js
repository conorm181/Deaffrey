var fs = require("fs");
const Stream = require('stream')
const readableStream = fs.createReadStream('./data.txt','utf8');
module.exports = {

    readFile: function () {
        var data = "";
        const allFileContents = fs.readFileSync('data.txt', 'utf-8');
            allFileContents.split(/\r?\n/).forEach(line =>  {
            info = line.split(',');
            data += info[0] + " has a grand total of " + info[1] + " time deafened\n";
            });
        console.log(data);
        return data;
    }
};