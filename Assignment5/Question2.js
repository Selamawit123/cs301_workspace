/*Write a function that computes and returns area of a circle based on the value of input radius.
a. Write a function that compute volume of a cylinder and making use of function that
computes area of a circle.*/
const prompt = require("prompt-sync")();
let radius= prompt("Enter the radius");
let height= prompt("Enter the height");
let PI = 3.14;
area = PI *Math.pow(radius,2);
//let volume = area *Height;
function computeArea(radius){
    return area;
}
console.log( `Area of the circle is : ${computeArea(radius)}`);

console.log(` Volume of the cylinder is :  ${area * height}`);