"use strict";
// Qno : 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just 
// the name of the pizza. For each pizza you should have one line of output containing a simple statement like 
// I like pepperoni pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//  The output should consist of three or more lines about the kinds of pizza you like and 
//  then an additional sentence, such as I really love pizza!
// Creating array add three kind of favourite pizza flavors.
let favoritePizza = ["fatija", "spicy beef", "chicken tikka"];
// using for loop.
for (let favPizza of favoritePizza) {
    console.log(`My favourite flavour pizza is ${favPizza}.`);
}
// print a message outside of the foor loop:
console.log(`I really love Piza!`);
