
/*rite the function countProperties(obj) which returns number of properties of an object.*/
"use strict";
 
let user={name:"selam", age: 10, isStudent: true};
let count=0;
for(let prop in user){
count=count+1;
}
console.log(count);