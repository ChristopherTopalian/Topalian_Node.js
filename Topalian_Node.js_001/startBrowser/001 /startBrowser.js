// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2009-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// startBrowser.js  (V001 - 2024-03-29)

const { exec } = require('child_process');

// URL to open
let url001 = 'https://www.google.com';

// open URL in default web browser
let command = 'start ' + url001;

// execute the command
exec(command);

console.log('Browser opened to: ' +  url001);
