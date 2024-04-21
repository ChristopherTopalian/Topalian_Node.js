// Dedicated to God the Father
// All Rights Reserved Christopher Topalian Copyright 2000-2022
// node njs_filename_path_parse_base_001.js
// shows the file base name of the path using console.log

const path = require('path');

console.log(path.parse(__filename).base);
