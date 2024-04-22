// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 014_Filter_by_Month_Day.js

let people =
[
    {
        name: 'Melissa',
        date: '2021/04/01',
    },
    {
        name: 'Tabitha',
        date: '2022/04/05'
    }
];

//-//

let targetMonth = '04';
let targetDay = '01';

//-//

for (let z = 0; z < people.length; z++)
{
    let parts = people[z].date.split('/');

    if (parts[1] === targetMonth && parts[2] === targetDay)
    {
        console.log('Hi', people[z].name);
    }
}

//-//

console.log('Press Enter to Exit');
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

/*
Hi Melissa
Press Enter to Exit
*/

