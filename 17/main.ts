// // Qno : 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner.

// // • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know
//   you’re sorry you can’t invite them to dinner.

// // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// // • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

// Print a message for to welcome a our guest

console.log("\n\t WellCome our Guest\n\t");


// creating a guest list array
let guestNames = ["Noman","Asad","Rehman","Maqbool","Safdar"]

// print a message all guest name

console.log(guestNames);

//make a variable guest person who can't come
let dontCome = guestNames[0]

// print the guest that who can't come
console.log(dontCome, "he can't come");

// add & remove guest person using slice function.

guestNames.splice(0,1, "Shoaib");

// Print the message to Arranging a bigger table

console.log("Good News to All ! We arranging a bigger Table")

// adding a new guest in start of the index using unshift function.

guestNames.unshift("Rafay");

// adding a new guest in last of the array using push funciton.

guestNames.push("Mehmood")

// take a new variable to add a new guest in middle index of the array with some logic.

let middleGuestnum = Math.floor(guestNames.length / 2);

// adding a new guest in middle of the arry

guestNames.splice(middleGuestnum, 0, "Bilal")

// print the messsage of updated list

console.log("Update list of our Guests");

// print all guest name one by one using foreach method

guestNames.forEach(guestOnebyone => console.log(`Assalam-O-Alaikum ${guestOnebyone}, Would like to dinner with me?`));


// print the message that the changing in our guest list
console.log("\nUnfortunatly , Bigger Dinner has been Canceled So just two Peoples are Invited\n")


// using while loop for removing guest until any two names remaining.
while(guestNames.length > 2) {
    let removeGuest = guestNames.pop();
    console.log(`Sorry ${removeGuest} now you are not invited to the dinner!`)
}

// print the message to remaining last two guest

console.log("\nInvited just last two guest\n");

guestNames.forEach(lastTwo => console.log(`\nLuckly ${lastTwo} ,you are still invited to the dinner!\n`));

// Removing last two guest and arry reaming empty

guestNames.pop();
guestNames.pop();

console.log("Empty list :", guestNames);

