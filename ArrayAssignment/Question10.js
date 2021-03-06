/*Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and a
value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.*/
function enhancedIncludes(arr, valSearch){
    for(let i=0; i<arr.length;i++){
        if (arr[0]===valSearch[0]){
            return true;
        }
        if(arr[1]===valSearch[1]){
            return -1
        }
        if(arr[1]===valSearch[3]){
            return -1

        }
    }
}
