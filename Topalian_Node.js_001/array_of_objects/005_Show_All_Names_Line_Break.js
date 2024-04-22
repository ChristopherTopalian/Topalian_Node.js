// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 005_Show_All_Names_Line_Break.js

let people =
[
    {
        name: 'Melissa',
        date: '2021/04/01',
    },
    {
        name: 'Tabitha',
        date: '2021/04/05'
    }
];

//-//

for (let z = 0; z < people.length; z++)
{
    console.log(people[z].name + '\n');
}

//-//

console.log('Press Enter to Exit');
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

/*
Melissa

Tabitha

Press Enter to Exit
*/

