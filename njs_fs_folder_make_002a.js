// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_fs_folder_make_002a.js
// makes a new directory
// another word for directory is folder
// mkdir means make directory
// this script is similar to the previous script, but with a different parameter name

const fs = require("fs");

function folderMake(nameOfFolder)
{
    let callback = function(theError)
    {
        if (theError)
        {
            console.log(theError);
        }
        else
        {
            console.log("Folder created successfully");
        }
    };

    fs.mkdir(nameOfFolder, callback);
}

folderMake("OurFolder");
