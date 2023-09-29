"use strict";
//checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["user1", "user2", 'user3', "user4", "user5", "user6",];
let new_users = ["user8", "user9", "user10", "USER2", 'user3', "user4"];
for (let x = 0; x < current_users.length; x++) {
    current_users[x] = current_users[x].toLowerCase(); //converting current users to lower case
}
for (let y = 0; y < new_users.length; y++) {
    new_users[y] = new_users[y].toLowerCase(); //converting new users to lower case
}
console.log(`current users:${current_users}`);
console.log(`New Users: ${new_users}`);
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log(`${new_users[i]} not available`);
    }
    else
        console.log(`newuser ${new_users[i]} is available`);
}
