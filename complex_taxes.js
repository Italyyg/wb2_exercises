"use strict"

//creating variables that will be needed for calculations
let payRate = 17.30;
let hoursWorked = 45;

//determine how many hours are normal vs. overtime hours
let regularHours = 0;
let overtimeHours = 0;

//if hours are greater than 40, we know they worked overtime
if (hoursWorked > 40) {
    //this is where we need to figure out the overtime hours
    regularHours = 40;
    overtimeHours = hoursWorked - 40
} else {
    //code for those who didnt work overtime
    regularHours = hoursWorked

}

//create some variable to represent the noraml pay and the ovetime pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

//figure out what we got payed after normal overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay

let annual = grossPay * 52;
let taxFileType = "joint";
let taxRate = 0;

if (taxFileType === "joint") {
    //we are filling a joint return
    if (annual < 12000) {
        taxRate = 0;
    } else if (annual < 25000) {
        taxRate = 6;
    } else if (annual < 75000) {
        taxRate = 11;
    } else {
        taxRate = 20;
    }
} else {
    //filling a single return
    if (annual < 12000) {
        taxRate = 5;
    } else if (annual < 25000) {
        taxRate = 10;
    } else if (annual < 75000) {
        taxRate = 15;
    } else {
        taxRate = 20;
    }
}

let taxAmount= grossPay * (taxRate/100);
let netPay= grossPay-taxAmount;

//display the results to the user
console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $" + payRate.toFixed(2) + " per hour, your gross pay is $" + grossPay);
console.log("Youre filing status is " + taxFileType );
console.log("Your tax withholdings this period is $" + taxAmount.toFixed(2));
console.log("Your net pay is $" + netPay.toFixed(2));
