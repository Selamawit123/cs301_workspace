/*
Example:
Input: exp = ["(", ")", "[", "{", "}", "]"]
Output: Balanced
Input: exp = ["[", "(", "]", ")"]
Output: Not Balanced*/
function isBalanced(arr){
    const leftSymobol = arr.concat();
    let left;
    for(i=0; i<arr.length;i++){
        
       if(arr[i]==="(" || arr[i]==="{" || arr[i]==="["){
           left= leftSymobol.push(arr[i]);
        }else{ if ( leftSymobol===null){
            return false;

        }
        if (arr[i]===")" && left!=="("|| arr[i]==="}" && left!=="{"||
         arr[i]==="]"&& left!=="["){
             return false;
            }
            leftSymobol.pop();
         }
    }
    return null;
}
let arr1= ["(", ")", "[", "{", "}", "]"];
console.log(isBalanced(arr1));