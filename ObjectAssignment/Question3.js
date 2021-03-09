/*Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", 
otherwise return false*/
"use strict";
/**
 * 
 * @param {String} str checkSpam
 * @returns {Boolean} true
 */ 
 function checkSpam(str){
         let capitalCased= str.toLowerCase();
     if(capitalCased.includes("lottery")||capitalCased.includes("prize")){
         return true;
     }else{
         return false;
     }

 }
 
 console.log(checkSpam("I won the Lottery"));
 