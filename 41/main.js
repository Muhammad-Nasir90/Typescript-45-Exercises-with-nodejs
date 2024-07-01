/*Qno : 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
// make an array of magician name.
var magician = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
// make an function show magician using foreach loop to print magicians one by one .
function show_magician(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
// call the funcition name of magician array.
show_magician(magician);
