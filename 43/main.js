/* Qno:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged, return
 the new array and store it in a separate array. Call show_magicians() with each array to show that
 you have one array of the original names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magician(magician) {
    magician.forEach(function (element) { return console.log(element); });
}
function make_great(magician) {
    return magician.map(function (name) { return console.log("The Great", name); });
}
var magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function copy_array(arr) {
    return __spreadArray([], arr, true);
}
var copy_magician_array = copy_array(magicians);
console.log("\nThis is my Original Array\n");
show_magician(magicians);
console.log("\nThis is my modifiy Copy Array\n");
make_great(copy_magician_array);
