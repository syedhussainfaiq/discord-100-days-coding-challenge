

//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the
// programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, 
//write one sentence describing what the program does.


// Faiq 2024-27-4
//This progam print a personal message.
let myName: string = "Faiq";
console.log(`Hello ${myName}, would you like to learn some TypeScripr today?`);




//Question 11:** Names: Store the names of a few of your friends in an array called names. Print each person’s name by
// accessing each element in the list, one at a time.


let names: string[] = ["Fariz", "Fazir", "Fariha"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}




//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to
// them. The message should be the same for each person, but personalized with their name.


let Names: string[] =["Fazir", "Fariz", "Fariha"];
for (let name of Names) {
    console.log(`Hello ${Names}, would you like to learn some Typescript today?`);

}