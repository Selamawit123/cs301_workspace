 /*Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM.*/
"use strict"
const prompt = require("prompt-sync")();
let num1 = +prompt("Enter a first positive integer: ");
let num2 = +prompt("Enter a second positive integer: ");
 /**
  * 
  * @param {int} num1 The first positive integer number
  * @param {int} num2 The second positive integer number
  * 
  * @returns{int} num1 It is module of num1 and num2
  */
function HCF(num1, num2){
     if ((typeof num1 !== "number") || (typeof num2 !== "number")) 
          return false;      
        while(num2) {
          let a = num2;
          num2= num1 % num2;
          num1 = a;
        }
        return num1;
        
       
      }
      /**
  * 
  * @param {int} num1 The first positive integer number
  * @param {int} num2 The second positive integer number
  * 
  * @returns{int}lcd  It is module of num1 and num2
  */

    let LCD= function (num1,num2){

          let lcd= (num1*num2)/ HCF(num1,num2);
          return lcd;
           
      }
      
    
     console.log(` Highest Common Factor is :  ${HCF(num1, num2)}`);
     console.log(` List Common Divisor is : ${(LCD(num1, num2))}`);

      