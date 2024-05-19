// Q 34 :

let pizzaas: string[] = [" pepperoni", "margherita" , "hawaiian"];
 pizzaas.forEach(pizza => {
    console.log (`I like ${pizza} pizza,`);
 });

 console.log(" I realy love pizza!");

 // Q 35:

 let animals : string[] = ["dog" , "cat", "rabbit"];

 animals.forEach(animal => {
    console.log(` A ${animal} would make a great pet`);
 });
 console.log("Any of these animals would make a great peat!");


 // Q 35:

 function make_shirt(size: string, message: string) {
    console.log(` Making a ${size} t-shirt with the message "${message}" printed
     on it.`);
 }

 make_shirt("medium","Code is Life");