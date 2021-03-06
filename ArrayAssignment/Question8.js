/*Write a function that merges two sorted arrays into one single sorted array. Make use of shift
and push array methods.*/
"use strict"
function mergeSortedArray(arr1, arr2){
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
     
	 
for(let i=0;i<arr1.length;i++)
    {
        for(let j=i+1;j<arr1.length;j++)
        {
            if(arr1[i]>arr1[j])
            {
                let temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    return arr1;
}
let array1= [1,4,7,8,9,];
let array2= [2,3,5,6];
console.log(mergeSortedArray(array1,array2));

