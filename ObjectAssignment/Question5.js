
/*Write a function named titleCase with one parameter named s. This function returns a copy of s 
but with the first letter of each word capitalized.*/
"use strict";
/**
 * 
 * @param {String} str Word to be capitalized 
 * @returns {String} firstCapital+test
 */
function titleCase(str){
    let firstCapital=str.charAt(0).toUpperCase();
    let test=str.substring(1,str.length);
    return firstCapital+test;
}
console.log(titleCase("selam"));