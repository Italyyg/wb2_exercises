//corrects any errors related to my code, (variables that have not been declared yet)
"use strict"

//creating variables that will be needed for calculations
let payRate= 25.00;
let hoursWorked= 40;

//determine how many hours are normal vs. overtime hours
let regularHours=0;
let overtimeHours=0;

//if hours are greater than 40, we know they worked overtime
if(hoursWorked>40){ 
    //this is where we need to figure out the overtime hours
    regularHours= 40;
    overtimeHours= hoursWorked-40
}else{
    //code for those who didnt work overtime
    regularHours= hoursWorked

}

//create some variable to represent the noraml pay and the ovetime pay
let normalPay= payRate*regularHours;
let overtimePay= (payRate*1.5) *overtimeHours;

//figure out what we got payed after normal overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay

//display the resulrs to the user
console.log("I got payed $" +normalPay.toFixed(2)+ " for my regular hours");
console.log("I got payed $" +overtimePay.toFixed(2)+ " for my overtime hours");
console.log("I got payed $" +grossPay.toFixed(2)+ " for my gross pay");
