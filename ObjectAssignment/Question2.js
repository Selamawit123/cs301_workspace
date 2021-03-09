/*Write the function countProperties(obj) which returns number of properties of an object.*/
//function countProperties()
// const car = {
//     color: 'Blue',
//     brand: 'Ford',
//     model: 'Fiesta'
//   }
  
//   Object.keys(car).length

let user={name:"selam", age: 10, isStudent: true};
let count=0;
for(let prop in user){
count=count+1;
}
console.log(count);