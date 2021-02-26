const prompt = require("prompt-sync")();
let num = +prompt("please enter the number");
let i=1;
factorial=1;
for(let i=1; i<=num; i++){
factorial=factorial* i;

}
console.log(factorial);
