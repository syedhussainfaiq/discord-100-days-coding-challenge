//question 10:Adding Comments: Choose two of the progrms you've written, and add at least one comment to each.if the
//programs are straightforword at this point,just add your name nd the current date at the top of each program file. Then,
//write one sentence describing what the programs does.

// Faiq, 2024-4-27
// This program print a personal message.
let myName  : string = "Faiq Hussain";
console.log( `Hello ${myName}, would you like to learn some Typescript today?`);

//Question 11:Names:Store the names of afew of yor friends in an array called names.Print the each person's name by
//accessing each element in the list,one at a time.

let names: string[] = ["Fariz", "Fazir", "Fariha"];
for (let i = 0; i < names.length; i++) {
    console.log(names[ i]);
}


//Question 12:Greeting:Use the array from exercise 11.Instead of just printing each person's name,print a message to 
//them.The message should be the same for each person, but personalized with ther name.


let  Names: string[] = ["Fariz", "Fazir", "Fariha"];
for (let Name of Names) {
    console.log( `Hello ${Names}, would you like learn some TypeScript today?`);
}