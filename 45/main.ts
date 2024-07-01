// Qno: 45 Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. It should 
//  then accept an arbitrary number of keyword arguments. Call the function with the 
//  required information and two other name-value pairs, such as a color or an optional 
//  feature. Print the Object that’s returned to make sure all the information was stored correctly.


// Defince a function to create a car object with optional options.

function create_car(manufacturer, model , ...options) {

            // intialize a car object with manufacturer and model


            let car = {

                manufacturer : manufacturer,
                model : model

            };

            // add additional options to the car object.


            options.forEach(option => {

                let [key,value] = option.split(":")
                car[key.trim()] = value.trim(); 
            });

            return car;


}


// call the fucntion to create a car object.


let my_car = create_car("Rolls-Royce ","Phantom","color:black","sunroof: true");

// Print the variable to ensure all the information is stored correctly in the car object.

console.log(my_car);


















