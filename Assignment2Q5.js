const prompt= require("prompt-sync")();
let My_Age= prompt("Enter your Age");
let Maximum_heart_RPM= 220 - My_Age;
let Slowest_rate = Maximum_heart_RPM * 0.65;
let Fastest_rate = Maximum_heart_RPM * 0.85;
console.log("The slowest heart rate is" + Slowest_rate);
console.log("The fastest heart rate is " + Fastest_rate);

