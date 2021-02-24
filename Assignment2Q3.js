const prompt = require("prompt-sync")();
let TotalBox= prompt ("Enter the total number of boxes");
let  OneStack= prompt("Enter the number of boxes in one stack");
let numberOfStack = parseInt(TotalBox/OneStack);
let lastStack= TotalBox%numberOfStack;
 let numberOfStacks;
if (TotalBox%OneStack == 0){
 numberOfStacks=numberOfStack;
}
else{
   numberOfStacks= ++numberOfStack  ;
}
console.log("The number of Stacks " + numberOfStacks);
console.log("The number of boxes in the last Stack "+ lastStack);