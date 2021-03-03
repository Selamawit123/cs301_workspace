/*Write a function to compute HCF of two numbers. Write it as a function expression.*/
// program to find the HCF or GCD of two integers

const prompt = require("prompt-sync")();
let num1 = +prompt('Enter a first positive integer: ');
let num2 = +prompt('Enter a second positive integer: ');
 
function HCF(num1, num2){
     
        if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
          return false;
       num1= Math.abs(num1);
        num2= Math.abs(num2);
        while(num2) {
          let a = num2;
          num2= num1 % num2;
          num1 = a;
        }
        return num1;
        
        
      }
      console.log(HCF(num1, num2));
