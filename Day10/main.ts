// Question 28:
let age:number = 66;

if(age < 2){
    console.log("The person is a baby");
}else if(age < 4){
    console.log("This person is a toddler");
}else if(age < 13){
    console.log("THis person is a kid");
}else if(age < 20){
    console.log("This person is a teenager");
}else if (age < 65){
    console.log ("This person is a adult");
}else{
    console.log("This person is a elder")
}

// Question 29:

let favorite_fruit : string[] = ["apple", "mango","orang"]

if(favorite_fruit.includes("orang")){
    console.log("you realy like orang!")
}if(favorite_fruit.includes("apple")){
    console.log("you realy like apple!")
}


// Question 30:


let userName: string[] = ["Fariz", "user 1","user2","user3","user4"]
userName.forEach(userName =>{
    if(userName === "fariz"){ 
    console.log("Hello fariz would you like to see status report? ");
    }else{
        console.log(`Hello ${userName}; thank you for loggin in again`);
    }
});