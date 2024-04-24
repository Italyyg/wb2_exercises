//variables create as input for calculation
let foodCost = 79.25;
let tax = 6.54;
let tip = 12.00;

//do our calculations for variables above
let totalDue = foodCost + tax + tip;

//output the results to the console
console.log (
    "Food cost is " + foodCost + " and tax is " + tax);
console.log ("Tip is " + tip.toFixed (2));
console.log("Total  Due is " + totalDue);