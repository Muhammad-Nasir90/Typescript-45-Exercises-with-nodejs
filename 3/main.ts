// 3) Name Cases: Store a person’s name in a variable, and then print 
// that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Muhammad Nasir";

// in lower case

console.log("lowercase :", personName.toLocaleLowerCase());

//uppercase

console.log("uppercase:", personName.toUpperCase());

//titlecase

console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));