//Qno : 16 More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Print a message for to welcome a our guest
console.log("\n\t WellCome our Guest\n\t");
// creating a guest list array
var guestNames = ["Noman", "Asad", "Rehman", "Maqbool", "Safdar"];
// print a message all guest name
console.log(guestNames);
//make a variable guest person who can't come
var dontCome = guestNames[0];
// print the guest that who can't come
console.log(dontCome, "he can't come");
// add & remove guest person using slice function.
guestNames.splice(0, 1, "Shoaib");
// Print the message to Arranging a bigger table
console.log("Good News to All ! We arranging a bigger Table");
// adding a new guest in start of the index using unshift function.
guestNames.unshift("Rafay") /
    // adding a new guest in last of the array using push funciton.
    guestNames.push("Mehmood");
// take a new variable to add a new guest in middle index of the array with some logic.
var middleGuestnum = Math.floor(guestNames.length / 2);
// adding a new guest in middle of the arry
guestNames.splice(middleGuestnum, 0, "Bilal");
// print the messsage of updated list
console.log("Update list of our Guests");
// print all guest name one by one using foreach method
guestNames.forEach(function (guestOnebyone) { return console.log("Assalam-O-Alaikum ".concat(guestOnebyone, ", Would like to dinner with me?")); });
