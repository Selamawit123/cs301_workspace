/* Write a function compute, that takes three parameters. First parameter is a call back function
that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first)*/
// Function expression
// Function expression
let add=function (result) {
    return result;
    }
    
let compute=function (add,num1,num2){
    let sum=num1+num2;
    add(sum);
    
}
compute(add,10,15);
 

// Arrow function
let add= (result)=> {
    return result;
    }
    let compute=function (add,num1,num2){
        let sum=num1+num2;
        add(sum);
    }