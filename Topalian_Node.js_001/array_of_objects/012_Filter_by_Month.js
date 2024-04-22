// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 012_Filter_by_Month.js

let people =
[
    {
        name: 'Melissa',
        date: '2021/04/01',
    },
    {
        name: 'Tabitha',
        date: '2021/05/05'
    }
];

//-//

let targetMonth = '04';

//-//

for (let z = 0; z < people.length; z++)
{
    let parts = people[z].date.split('/');

    if (parts[1] === targetMonth)
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

