/*. Write the function getAverageAge(users) that gets an array of objects with two properties 
name and age and returns the average age*/
"use strict";
/**
 * 
 * @param {Number} users Users Age
 * @returns {Number} average 
 */
function avgAgerageAge(users){
    let sum=0;
    let count=0;
    for (let prop in users){
        count++;
        sum+=users.age;
    } 
    let average=sum/count;
    return average;
}
 let users={ age: 3, age:5, age:8};
 console.log(avgAgerageAge(users.age));
