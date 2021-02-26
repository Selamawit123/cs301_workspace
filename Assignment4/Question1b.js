const prompt = require("prompt-sync")();
let num = prompt("Please enter a number to test weather the number is a prime number or not : ");
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }  
  console.log(isPrime);
  