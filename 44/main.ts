/*Qno: 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, 
 and it should print a summary of the sandwich that is being ordered. Call the function three times, 
 using a different number of arguments each time.Sandwiches: Write a function that accepts a array of 
 items a person wants on a sandwich. The function should have one parameter that collects as many items 
 as the function call provides, and it should print a summary of the sandwich that is being ordered. Call 
 the function three times, using a different number of arguments each time.*/

 function make_sandwich (item: string []){

    console.log(`Making your Sandwich with:`);

    item.forEach(element => console.log("- " + element))
 }

 make_sandwich(["Ham","Cheese","lettuce"]);
 
 make_sandwich(["Turkey","Bacon"]);

 make_sandwich(["Peanut","butter","jelly"]);