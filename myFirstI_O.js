// require the filesystem
var fs = require('fs');

// grab the first console argument AFTER node and the filename
var file = process.argv.slice(2).toString();
//console.log(file);

// read the file using the path from file and turn into a string
var fileContents = fs.readFileSync(file).toString();
//console.log(fileContents);

// split the string of the file contents via the \n delimeter, take the length of that array and minus one and log out
console.log(fileContents.split("\n").length - 1);
