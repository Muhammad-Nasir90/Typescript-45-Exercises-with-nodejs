"use strict";
/* QNO : 37 Large Shirts: Modify the make_shirt() function so that shirts are large by
default with a message that reads I love TypeScript. Make a large shirt and a medium
 shirt with the default message, and a shirt of any size with a different message.
*/
// make function make_shirt()
function make_shirt(size = "Large", message = "I Love Typescript.") {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}
// call function 
make_shirt();
// call function just change 1st arguments.
make_shirt("Medium");
// Again call function with 2 arguments.
make_shirt("Small", "I Love Javasript");
