const prompt= require("prompt-sync")();
let Cost= +prompt("Enter the cost of the house");
if(Cost <0){
    console.log("please enter the valid entry");
}
else if(Cost <50000){
    console.log("The down payment of the house is $" + (Cost * 0.05));
}
else if(Cost <100000){
    console.log("The down payment of the house is $" + (1000+0.1*( Cost - 50000)));
}
else if(Cost <200000){
    console.log("The down payment of the house is $" + (2000+0.15*( Cost - 100000)));
}
else {
    console.log("The down payment of the house is $" + ( 5000+0.1*( Cost - 200000)));
}
