// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.

// Question 2: Personl Message: Store a person's name in a variable and print a message 
// to them, Like "Hello Fiq, would you like to learn some TypeScript to day?"

let Name: string = "Faiq";

console .log(`Hello ${Name}, would you like to learn some TypeScript today?`);

//Question 3: Name Cases: Store a person's name in a variale, and then print that person's
// name in Lowercase, uppercase, and titlecase.


let nAme: string = "Faiq";

console.log(nAme.toLocaleLowerCase());

console.log(nAme.toUpperCase());

console.log(nAme.charAt(0).toUpperCase()+nAme.slice(1).toLocaleLowerCase());