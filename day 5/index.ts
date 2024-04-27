// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motercycle or a care, and make list
// that store several examples. Use your list to print a series of statment about thes items, such as "I would like to owan a
// Honda motercyle."


let transport: string [] = ["Honda motercycle" , "Tesla care" , "Binchi bicycle"];

transport.forEach(transport => {
    console.log(`I would like to own a ${transport} . `);
});


// QUestion 14: Guest list: If you could invite anyone, living or deceased, to dinner,who would you invite? make a list that
// includes at least three people you,d like to invite to dinner. Then use your list to print a messege to each person, inviting
// them to dinner.


let guestes: string[] =[" Albert Einstein" , "Marie Curie", "Nikola Tesla"];

guestes.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Question 15:Changing Guet List: One of your guests can't make it to dinner,so you need to send outr a new set of
// invitations with a replacement guest.

let unableToAttend = "Nikola Tesla";
console.log(` ${unableToAttend}, can't make it to dinner.`);

let newGuest = "Leonardo da Vinci";
guestes[guestes.indexOf(unableToAttend)] = newGuest;

guestes.forEach(guest => {
    console.log(` Dear ${guest}, would you like to join me for dinner?`);
});