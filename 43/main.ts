/* Qno:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged, return 
 the new array and store it in a separate array. Call show_magicians() with each array to show that 
 you have one array of the original names and one array with the Great added to each magician’s name.*/

 function show_magician(magician : string []):void{

    magician.forEach(element => console.log(element))
}

function make_great(magician : string [])  {

    return magician.map(name => console.log("The Great" ,name))
}

let magicians : string [] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"]

function copy_array(arr:string []){

  return  [...arr]
}





const copy_magician_array = copy_array(magicians)

console.log("\nThis is my Original Array\n")

show_magician(magicians);

console.log("\nThis is my modifiy Copy Array\n")

make_great(copy_magician_array)

