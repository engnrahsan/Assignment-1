"use strict";
/*Q12.Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/
let names = ['junaid', 'Azwer', 'Waleed', 'Waqas',];
let Greetings = "many many Happy Returns of the day";
names.forEach((i) => {
    console.log(`hello ${i},${Greetings}`);
});
