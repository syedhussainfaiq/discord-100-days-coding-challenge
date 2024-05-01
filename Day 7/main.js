//Qustion 19: Dinner Guests: Use one your program from exercise 14 through 
//18 to point a message indicating the number op people you are inviting to dinner.
var guests = ["Albert Einstien", "Marie Curie",
    "Landaro da Vinci", "Charles Darwin"];
console.log("I am inviting ".concat(guests.length, ", people to dinner."));
//Question 20:Think of something you could store in an array.For example,you
//could make list pf mountains, rivers,countries,cities,languages,or anything else
//you,d like.Write a program that creates  list containing these items.
var countries = ["Japan", "Canada", "New Zeland", "Iceland", "Switzerland"];
console.log("countries I'd like visit to ", countries);
//Question 21: Think of something you could store in a TypeScript Object.Write a
// program that creates objects containing these items.
var book = {
    titel: "The Hobbit",
    author: "j.R.R Tolkien",
    yearPubluished: 1985
};
console.log("Book Info: ".concat(book.titel, " by ").concat(book.author, ",\n    published in ").concat(book.yearPubluished));
