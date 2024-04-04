// Question 3: Save a name in variable .Show it in small letter,ALL BIG LETTER,and 
// First Letter Big for each word.This help learn how to chang text style.



let Name: string = "Faiq";

console.log(Name.toLocaleLowerCase());

console.log(Name.toLocaleUpperCase());

console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());