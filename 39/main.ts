/* Qno : 39 City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

// make a funciton with name city_country() using return keyword.

function city_country(city : string , country: string ) : string {
    return `${city},${country}`;
}

// call funciton with arguments at with three country paris,

let result = city_country("Karachi","Pakistan");
console.log(result);

let result1 = city_country("Tokoy","Japan");
console.log(result1);

let result3 = city_country("Paris","France");
console.log(result3);
