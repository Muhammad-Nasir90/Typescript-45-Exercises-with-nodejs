/*Qno: 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
function show_magician(magician) {
    magician.forEach(function (element) { return console.log(element); });
}
function make_great(magician) {
    return magician.map(function (name) { return console.log("The Great", name); });
}
var magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
make_great(magicians);
