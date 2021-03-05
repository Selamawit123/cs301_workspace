"use strict"

/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
  if(arr1.length!==arr2.length)  return false;
for(let i=0; i<arr1.length;i++){
    if(arr1[i]!== arr2[i]){
        return false;
    }
}
return true;
}

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
    
    if(num1%2==0&& num2%2==0){
    return num1 +num2;
      }
 if ((num1%2!==0&& num2%2!==0)){
     return num1+num2;
       }
   }
   return NaN;
}

module.exports= {isArrayEqual, addend}