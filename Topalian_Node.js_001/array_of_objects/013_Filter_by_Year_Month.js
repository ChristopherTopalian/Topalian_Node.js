// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 013_Filter_by_Year_Month.js

let people =
[
    {
        name: 'Melissa',
        date: '2020/04/01',
    },
    {
        name: 'Tabitha',
        date: '2021/04/05'
    }
];

//-//

for (let z = 0; z < people.length; z++)
{
    if (people[z].date.startsWith('2021/04'))
    {
        console.log('Hi ' + people[z].name);
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
Hi Tabitha
Press Enter to Exit
*/

