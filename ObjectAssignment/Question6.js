/*Write a swap function that takes two parameters of number type and swap the values of the 
passed parameters. */
"use strict"
/**
 * 
 * @param {Number} num1 First number
 * @param {Number} num2 Second number
 * @returns {Number} num NUmber after Swapping
 */
function swap(num1,num2){
    let num;
    let temp=num1;
    num1=num2;
    num2=temp;
    num=num1+","+num2;
    return num;
}
console.log(swap(4,6));