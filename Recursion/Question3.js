"use strict"
/**
 * 
 * @param {String} str string to be reversed
 * @returns {String}  reversed String
 */
function stringReverse(str){
if(str.length===0){
    return "" ;
}else{    
    return str.substring(str.length, str.length-1) + stringReverse(str.substring(0, str.length-1));
     }
}
console.log(stringReverse("Selam"));
