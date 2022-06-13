// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_fs_file_read_001.js
// shows the data of a text file
// the text file that we will be reading from:
// must be named ourFile.txt
// must be located in the same folder as this script
// must contain some text in the text file

const fs = require("fs")

let fileName = "ourFile.txt";

let encoding = "utf8";

let callback = function(theError, data)
{
    if (theError)
    {
        console.log(theError);
    }
    else
    {
        console.log(data);
    }
};

fs.readFile(fileName, encoding, callback);
