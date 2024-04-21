// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_filename_path_parse_001.js
// shows the file root, dir, base, extension and name, as an object, using console.log

const path = require('path');

console.log(path.parse(__filename));
