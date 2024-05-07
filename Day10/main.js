// Question 28:
var age = 66;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("This person is a toddler");
}
else if (age < 13) {
    console.log("THis person is a kid");
}
else if (age < 20) {
    console.log("This person is a teenager");
}
else if (age < 65) {
    console.log("This person is a adult");
}
else {
    console.log("This person is a elder");
}
// Question 29:
var favorite_fruit = ["apple", "mango", "orang"];
if (favorite_fruit.includes("orang")) {
    console.log("you realy like orang!");
}
if (favorite_fruit.includes("apple")) {
    console.log("you realy like apple!");
}
// Question 30:
var userName = ["Fariz", "user 1", "user2", "user3", "user4"];
userName.forEach(function (userName) {
    if (userName === "fariz") {
        console.log("Hello fariz would you like to see status report? ");
    }
    else {
        console.log("Hello ".concat(userName, "; thank you for loggin in again"));
    }
});
