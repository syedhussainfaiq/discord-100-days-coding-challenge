//Question 28:

let age:number = 66 ;

if(age < 2){
    console.log("The person is a baby.");
}else if(age < 4){
    console.log("The person is a toddler.");
}else if(age < 13){
    console.log("The person is a kid.");
}else if(age < 20){
    console.log("The person is a teenager");
}else if(age < 65){
    console.log("The person is a adult.");
}else {
    console.log("The person is a elder");
}

//Question 29:

let favorite_frouits : string[] = ["banana", "apple","oring"]

if(favorite_frouits.includes("orang!")){
    console.log("you really like orang");
}if(favorite_frouits.includes("apple")){
    console.log("yoy really like  apple!");
}

//Question 30:

let userName: string[] =["fariz","user1","user2","user3","user4"]
userName.forEach(userName =>{
    if(userName === "fariz"){ 
    console.log("Hello fariz would you like to see a ststus report?");
    }else{
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
});
