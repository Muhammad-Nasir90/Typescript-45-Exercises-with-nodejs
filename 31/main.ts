// Qno : 31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// create a array

let userNames = ["Safdar", "Rafay", "Junaid", "Admin", "Sami"];

userNames = [];
// we use length method to check our array is empty or not.
if (userNames.length === 0) {
  console.log("Your arry is empty you need to find some users!");
} else {
  userNames.forEach((oneUser) => {
    if (oneUser === "Admin") {
      console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    } else {
      console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
  })
}
