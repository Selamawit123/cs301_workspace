const prompt= require("prompt-sync")();
let Beggining_Odometer = prompt("Enter the beggning odometer");
let Ending_Odometer = prompt("Enter the ending odometer");
let Used_gas = prompt("Enter number of gallons of gas used");
let Total_Distance = Ending_Odometer - Beggining_Odometer;
let Gas_consumption = Total_Distance/Used_gas;
console.log(Gas_consumption + "  miles per gallon.")