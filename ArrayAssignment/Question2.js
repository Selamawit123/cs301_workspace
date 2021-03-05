
"use strict"
/**
 * 
 * @param {array} arr  numbers added on the stack
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr){
    let stack =[];
    for(let i=0; i<arr.length;i++){
    
    stack.push(arr[i]);
    let num1=stack.pop();
    let num2=stack.shift();
    if((num1%2===0&&num1%2!==0)||(num1%2!==0&&num1%2===0)){
        return NaN;
    }
    if(num1%2==0&& num2%2==0){
    return num1 +num2;
 }
 if ((num1%2!==0&& num2%2!==0)){
     return num1+num2;
 }
   }
}