// question 28
var age = 12;
if (age <= 2) {
    console.log("The person is a baby.");
}
else if (age <= 4) {
    console.log("The person is a toddler");
}
else if (age <= 12) {
    console.log("The person is a kid.");
}
else if (age <= 20) {
    console.log("The peron is a teenger.");
}
else if (age <= 65) {
    console.log("The person is a adult.");
}
else {
    console.log("The person is a elder.");
}
//Question 29:
var favoriet_fruits = ["Banana", "Oring", "Mango"];
if (favoriet_fruits.includes("Banana")) {
    console.log("you really like banana ");
}
if (favoriet_fruits.includes("Mango")) {
    console.log("you realy like mango");
}
//Question 30:
var userName = ["fariz", "user1", "user2", "user3", "user4"];
userName.forEach(function (userName) {
    if (userName === "fariz") {
        console.log("Hello fariz, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for loggin in again"));
    }
});
