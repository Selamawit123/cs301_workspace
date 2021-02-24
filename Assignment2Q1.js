const prompt= require('prompt-sync')();
let volume= prompt('Enter the volume in Quarts');
let To_Litters = volume*0.95;
console.log("Volume in litters"+ To_Litters);
