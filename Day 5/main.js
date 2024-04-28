//Question 13
var transports = ["Honda motercycle", "Tesla car", "Binchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own ".concat(transport, "."));
});
//Question 14
var guests = ["Fariz", "Fazir", "Fariha"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like join me for dinner?"));
});
// Question 15
var unableToAttend = "Fariha";
console.log("".concat(unableToAttend, ", can't make it to dinner."));
// Replace the guest
var newGuest = "Hussain";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitation
guests.forEach(function (guest) {
    console.log(" Dear".concat(guest, ", would you loike to join me for dinner"));
});
