// Qno : 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Define variable

let animal = "lion";
let animalLowercase = "LION";
// check condition is equality or unequality with string.

console.log("Is Lion equal to Lion?")
console.log("lion" == "lion");

console.log("\nIs Lion not equal to Lion?")
console.log("lion" != "lion");

// lowerCase funciton use in true condition

console.log("\nIs Lion erqual to Lion after converting in LowerCase?")
console.log(animalLowercase.toLowerCase() == "lion")

// lowerCase funciton use in false condition

console.log("\nIs Lion not erqual to Lion after converting in LowerCase?")
console.log(animalLowercase.toLowerCase() != "lion")



// Numerical Test 
// define variables
let ten = 10;
let five = 5;

// Equality test

console.log("Is ten equal to five?");
console.log(ten == five);

// not Equal to

console.log("\nIs ten not equal to five?");
console.log(ten != five);

// Greater than

console.log("\nIs five greater than ten?");
console.log(five > ten);

// less than

console.log("\nIs five less than ten?");
console.log(five < ten);

// Greater then or equal to 

console.log("\nIs ten greater than or equal to 0?")
console.log(ten >= 0);

// Less than or equal to 

console.log("\nIs five Less than or egual to 10?");
console.log(five <= ten );

// using (&&) or (||) operators

// && (and) operator

console.log("\nIs 5 equal to 5 && Is 5 not equal to 5");
console.log(5 == 5 && 5 != 5);

// || (Or) operator

console.log("\n Is 10 greater is 20 || or 10 less is 15?")
console.log(10 > 20 || 10 < 15);

// test whether an item is in array

// define variable

let fruit = ["banana", "apple", "mango"];

// conditon is my value is in  fruit array (include)

console.log("Is my mango in my fruit array");
console.log(fruit.includes("mango"))  // include method we use to check value our value in arry or not.

// conditon is my value is not in my fruit array (not include)
    
console.log("Is my water millon is not in my fruit array");
console.log(!fruit.includes("water millon"));