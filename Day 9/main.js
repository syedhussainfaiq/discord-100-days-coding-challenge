//Question 25:
var alien_color = "green";
if (alien_color == "green") {
    console.log("you just earn 5 points!");
}
alien_color = "red";
if (alien_color == "green") {
    // no output because the condition false
}
// Question 26:
// version that runs if block
alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
// Version that runs the else block
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the elien!");
}
else {
    console.log("You just earned 10 points.");
}
//Question 27:
// Green alien version
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points .");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("YOU earned 15 points.");
}
//Yello alien version
alien_color = "Yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("Ypu earned 15 points.");
}
//Red alien version
alien_color = "red";
if (alien_color == "green") {
    console.log("Ypu earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points. ");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
