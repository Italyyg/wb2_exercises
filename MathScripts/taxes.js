//variables create as input for calculation
let fedtax= 23;
let income= 968.35;

//do our calculations for variables above
let withheld= (income*fedtax)/100;

//output the results to the console
console.log("The amount withheld from your income was " + withheld.toFixed(2));