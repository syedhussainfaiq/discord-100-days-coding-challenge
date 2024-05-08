// Question :31

let username: string[] = [];

if(username.length === 0) {
    console.log("we need to find some users!")
} else{
    //Great 
}

// Removing all usernames ensures the message "we need to find some users" is print.



// Question :32

let current_users: string[] = ["user1","admin","user3","user4","user5"];
let new_user: string[] = ["user1","user6","user7","admin","user9"];

new_user.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase()===
newUser.toLowerCase())) {
    console.log(`${newUser} will need to enter new username.`);
} else{
    console.log(`${newUser} is available.`)
}
});


//Question :33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1){
        suffix = "st";
    } else if (number === 2){
        suffix = "nd";
    } else if (number === 3){
        suffix = "rd";
    }
     console.log(`${number} ${suffix}`);
});

