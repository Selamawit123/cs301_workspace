const prompt= require("prompt-sync")();
let number= +prompt("Enter the number");

 
    sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(sum);