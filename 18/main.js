// Qno : 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// creating a array in which we shore Places five world places name.
var worldPlaces = ["Banglades", "Australia", "China", "Denmark", "Egypt"];
// print array in original form
console.log("Origianl Order:", worldPlaces);
// Array print in alphabetical order without any modification.
console.log("Alphabetic Order :", __spreadArray([], worldPlaces, true).sort());
// Array list it's still in Original form
console.log("Still Origianl Form :", worldPlaces);
// Array list now it's change to reverse form without any Change in orginal order
console.log("Reverse Order :", __spreadArray([], worldPlaces, true).reverse());
// Array list it's still in Original form
console.log("Still Origianl Form :", worldPlaces);
// now Change Original arry in reverse form
console.log("Reverse Order :", worldPlaces.reverse());
// Reverse the order again now the Order Change in bact to original Form
console.log("Reverse Order again:", worldPlaces.reverse());
// original order sort in alphabetical order
console.log("Alphabetical Order:", worldPlaces.sort());
// Again Original order change in reverse form.
console.log("Reverse form again:", worldPlaces.reverse());
