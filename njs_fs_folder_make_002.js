// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_fs_folder_make_002.js
// makes a new directory
// another word for directory is folder
// mkdir means make directory

const fs = require("fs");

function folderMake(folderName)
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

    fs.mkdir(folderName, callback);
}

folderMake("OurFolder");
