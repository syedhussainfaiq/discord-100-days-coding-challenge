// Q 37:

function makeShirt(size: string = "Large",message: string = "I love TypeScript"){
    console.log(`Making a ${size} t-shirt with rhe message "${message}" printed on
    it`);
}

makeShirt();
makeShirt("medium");
makeShirt("small", "Dive into Coding");


// Q 38:

function discribe_city (city: string , country: string = "pakistan") {
 console.log(`${city} is in ${country}.`);
}
discribe_city("Karachi");
discribe_city("Lahore");
discribe_city("Tokyo","Japan");
discribe_city("Dehli","India");
discribe_city("New york","Amrica");

// Q 39 :

function city_country(city : string, country: string): string{
    return `${city} ,${country}`
}

console.log("Karichi",("Pakistan"));
console.log("Dehli",("India"));
console.log("Paris",("Franse"));