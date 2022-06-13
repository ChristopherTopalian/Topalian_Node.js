// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_fs_file_write_001.js
// creates a new text file if one doesn't already exist
// writes data to the text file
// flag: w  overwrites the data if it already exists
// flag: a  appends the data if it already exists

const fs = require('fs')

let fileName = "ourFile.txt";

let data = "Howdy";

let options =
{
    encoding: "utf8",
    flag: "w"
};

let callback = function(theError)
{
    if (theError)
    {
        console.log(theError);
    }
    else
    {
        console.log("File successfully written");
    }
};

fs.writeFile(fileName, data, options, callback);
