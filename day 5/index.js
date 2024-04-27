// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motercycle or a care, and make list
// that store several examples. Use your list to print a series of statment about thes items, such as "I would like to owan a
// Honda motercyle."
var transport = ["Honda motercycle", "Tesla care", "Binchi bicycle"];
transport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, " . "));
});
// QUestion 14: Guest list: If you could invite anyone, living or deceased, to dinner,who would you invite? make a list that
// includes at least three people you,d like to invite to dinner. Then use your list to print a messege to each person, inviting
// them to dinner.
var guestes = [" Albert Einstein", "Marie Curie", "Nikola Tesla"];
guestes.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Question 15:Changing Guet List: One of your guests can't make it to dinner,so you need to send outr a new set of
// invitations with a replacement guest.
var unableToAttend = "Nikola Tesla";
console.log(" ".concat(unableToAttend, ", can't make it to dinner."));
var newGuest = "Leonardo da Vinci";
guestes[guestes.indexOf(unableToAttend)] = newGuest;
guestes.forEach(function (guest) {
    console.log(" Dear ".concat(guest, ", would you like to join me for dinner?"));
});
