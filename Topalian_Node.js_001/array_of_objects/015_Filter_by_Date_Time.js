// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// 015_Filter_by_Date_Time.js

let people =
[
    {
        name: 'Melissa',
        date: '2021/04/01 08:00AM',
    },
    {
        name: 'Tabitha',
        date: '2021/04/01 12:00PM'
    }
];

//-//

for (let z = 0; z < people.length; z++)
{
    if (people[z].date > '2021/04/01 08:00AM')
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

