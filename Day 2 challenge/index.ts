// Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote 
// and the name of its outhor. Your output should look something like the following, including the quotation mark:
// "Albert Einstien once said,"A person who never made mistake never tried anything new.""


console.log('Albert Einstein said,"A person who never made a mistake never tried anything new."');



// questiom 2: Famous Quote 2: Repet Exercise 1,


let famous_person: string = "Albert Einstein";
let message: string = ` ${famous_person} once said, "A person who never made a mistake
never tried anyrhing new. "`;

console.log(message);


// Question 3:Stripping Names: Store a person's name, and include some whitespace characters at the beginning and end of
//the name. Use "\t"(tab) and "\n"(new line)at least once. Print the name one, so the whitespace around the name is
//displayed. Then print the name after stripping the whitespaces.


let Name: string = "\t\n Faiq \t\n";

console.log(Name);
console.log(Name.trim());