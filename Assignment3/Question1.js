const prompt = require("prompt-sync")();
let Weather = prompt("Enter the weather condition");
//let Temp = prompt("Enter the Temprature");
if(Weather==="hot"){
    console.log("Wear a Sandal")
}
else if(Weather==="rain"){
    console.log("wear a galoshes ")
}
else if(Weather==="snow"){
    console.log("Wear a boots")
}
else{
   console.log ("Wear a sneaker")
}