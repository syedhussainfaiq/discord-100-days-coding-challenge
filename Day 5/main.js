"use strict";
//Question 13
let transports = ["Honda motercycle", "Tesla car", "Binchi bicycle"];
transports.forEach(transport => {
    console.log(`I would like to own ${transport}.`);
});
//Question 14
let guests = ["Fariz", "Fazir", "Fariha"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like join me for dinner?`);
});
// Question 15
let unableToAttend = "Fariha";
console.log(`${unableToAttend}, can't make it to dinner.`);
// Replace the guest
let newGuest = "Hussain";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitation
guests.forEach(guest => {
    console.log(` Dear${guest}, would you loike to join me for dinner`);
});
