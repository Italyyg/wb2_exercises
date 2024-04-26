"use strict"

//creating a variable for the current hour
let currentHour = 15;
let greeting ="";


//create an if/else statement to figure out our greeting
if(currentHour <= 10){
    greeting ="Good morning!";


}else if(currentHour >=10 && currentHour< 17 ){
    greeting ="Good afternoon!";


}else{
    greeting = "Good evening!"
}

//display results in the console
console.log(greeting)