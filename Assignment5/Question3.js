/* Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below.
Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*width
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write main formulas as a separate function.*/
const prompt= require("prompt-sync")();
let width = +prompt("Enter the width of the house");
let depth= +prompt("Enter the height of the house");
let height= +prompt("Enter the depth of the house");
let sweep= +prompt("Enter the sweep of the roof");
let a = +prompt("Enter the 1st side of the triangle");
let b = +prompt("Enter the 2nd side of the triangle");
let c = +prompt ("Enter the 3rd side of the triangle");

let livingVolume= width *height* depth;

let semiPeri= (a + b + c)/2;
let triangleArea =Math.floor( Math.sqrt(semiPeri*(semiPeri-a)*(semiPeri-b)*(semiPeri-c)));
let roofVolume= triangleArea*width;
let houseVolume = livingVolume + roofVolume;
function computeLivingVolume(width,height,depth){
    return livingVolume;
}
console.log(`The volume of the living house is : ${computeLivingVolume(width,height,depth)}`);
function computeSemiPeri(a,b,c){
    return semiPeri;
}
console.log(`The semi Perimeter of the trangle is:  ${computeSemiPeri(a,b,c)}`);
function computeTriangleArea(semiPeri,a,b,c){
    return triangleArea;
}
console.log(`The area of the triangle is: ${computeTriangleArea(semiPeri,a,b,c)}`);
function computeRoofvolume(triangleArea,width){
    return roofVolume;
}
console.log(`The volume of the roof is : ${computeRoofvolume(triangleArea,width)}`);
function computehouseVolume(livingVolume,roofVolume){
    return houseVolume;
}
console.log(`The volumeof the house is: ${computehouseVolume(livingVolume, roofVolume)}`);

