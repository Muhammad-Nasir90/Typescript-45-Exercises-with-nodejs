/* QNO : 38 Cities: Write a function called describe_city() that accepts the name of a city and 
its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give 
the parameter for the country a default value. Call your function for three different cities, 
at least one of which is not in the default country.*/

 // makeing function describe_city()

function describe_city(city : string , country : string = "Default Country.") {

    console.log(`${city} is in ${country}`);
    
}

// call funciton with arguments.

describe_city("Karachi","Pakistan.");

// again call function.

describe_city("Tokoyo","Japan.");

// call function just single arguments.

describe_city("Paris");