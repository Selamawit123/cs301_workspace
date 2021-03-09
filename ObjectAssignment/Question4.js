/*Write a function named suffix that returns the common suffix of two strings. For example, the 
common suffix of “swimming” and “walking” is “ing”. This function takes two parameters and 
returns the common suffix.*/
"use strict";
/**
 * 
 * @param {String} str1 word1
 * @param {String} str2 word2
 * @returns  {String } Suffix1 
 */
 function suffix(str1,str2){
    let Suffix ="";
    for(let i=0;i<str1.length;i++){
    if(str1.charAt(str1.length-1-i)===str2.charAt(str2.length-1-i)){
    Suffix=Suffix+str1.charAt(str1.length-1-i);
    }
    }
    let Suffix1="";
    for(let i=Suffix.length;i>=0;i--){
        Suffix1+=Suffix.charAt(i);
    }
    return Suffix1;
}
console.log(suffix("publishing","holding"));