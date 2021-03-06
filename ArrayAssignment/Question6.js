/*Modify rotate functions to rotate array right by n times where, n is the second parameter
passed in the function.*/
function rotateNRight(arr, rotations){
    const rotatedArray = arr.concat();
        for(i=0; i<rotations; i++){
            let rearItem= rotatedArray.pop();
            rotatedArray.unshift(rearItem);
    }
   return  rotatedArray;
}
 let rotations = 2;
 let arr1 = [4,5,6,7,8,9];
 console.log(rotateNRight(arr1, rotations));

 
 