"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ['admin', 'user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
for (let i = 0; i < users.length; i++) {
    console.log(`Hello ${users[i]} how are you`);
}
for (let j = 0; j <= users.length; j++)
    if (users[j] === 'admin') {
        console.log(`Hello admin would you like to see a status report`);
    }
    else {
        console.log(`hello ${users[j]} Thank you for loging in again`);
    }
