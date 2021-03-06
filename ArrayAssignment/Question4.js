/*Write a function to rotate the elements in an array to the left by 1.*/

function rotateLeft(arr, rotations){
    const rotatedArray= arr.concat();
    for(i=0; i<rotations; i++){
        let frontItem= rotatedArray.shift();
        rotatedArray.push(frontItem);
    }
    return rotatedArray;
}
let rotations =1;
let Arr1= [1,2,3,4,5,6];
console.log(rotateLeft(Arr1, rotations));