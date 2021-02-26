const prompt = require("prompt-sync")();
let num = prompt("Please enter a number to test weather the number is a prime number or not : ");
let factor_count = 0;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    factor_count++;
  }
}

console.log(factor_count === 0);