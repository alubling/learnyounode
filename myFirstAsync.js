// reuire the filesystem
var fs = require('fs');

// grab the first console argument AFTER node and the filename
var file = process.argv.slice(2).toString();
//console.log(file);

// read the file and when the file is done, run the callback which just goes direct to splitting the string
fs.readFile(file, 'utf8', function(error, bufferString) {
  if (error) {
    console.log("Error man!");
  } else {
    console.log(bufferString.split("\n").length - 1);
  }
});
//console.log(fileContents);

//console.log(fileContents.split("\n").length - 1);
