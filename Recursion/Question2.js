/*count the digits of a given number*/
"use strict"
/**
 * 
 * @param {Number} num Given number
 * @returns {Number}  No of digits
 */
function countDigits(num){
if(num.length===0){
    return 0;  }
if(num<10){
    return 1;
}else {
    return 1 + countDigits(parseInt(num/10));
      }
} 
console.log(countDigits(342));