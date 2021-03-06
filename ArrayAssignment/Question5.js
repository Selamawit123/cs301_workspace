
/*Write a function to rotate the elements in an array to the right by 1.*/

function rotateRight(arr, rotations){
const rotatedArray= arr.concat();
for(i=0; i<rotations;i++){
    let rearItem= rotatedArray.pop();
    rotatedArray.unshift(rearItem);
}
return rotatedArray;
}
let numRotations= 1;
let arr1 = [1,2,3,4,5,6];

console.log(rotateRight(arr1, numRotations));
 