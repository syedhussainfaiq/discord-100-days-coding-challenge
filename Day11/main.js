// Question :31
var username = [];
if (username.length === 0) {
    console.log("we need to find some users!");
}
else {
    //Great 
}
// Removing all usernames ensures the message "we need to find some users" is print.
// Question :32
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_user = ["user1", "user6", "user7", "admin", "user9"];
new_user.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() ===
        newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//Question :33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number, " ").concat(suffix));
});
