"use strict";
// Qno: 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
//  in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has,
//  print a message that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Nasir", "Asad", "Bilal", "sarvar", "Rashid"];
let new_users = ["nasir", "asad", "akhtar", "basit", "Mehmood"];
let lowercase = [];
for (let i = 0; i < current_users.length; i++) {
    lowercase.push(current_users[i].toLowerCase());
}
for (let j = 0; j < new_users.length; j++) {
    if (lowercase.includes(new_users[j])) {
        console.log(`${new_users[j]} is not available`);
    }
    else {
        console.log(`${new_users[j]} is available`);
    }
}
