// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 004_Show_All_Dates.js

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
    console.log(people[z].date);
}

//-//

console.log('Press Enter to Exit');
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

/*
2021/04/01
2021/04/05
Press Enter to Exit
*/

