"use strict"

function joinWords(arr){
    arr.sort(function(opr1, opr2){
        return opr1.length - opr2.length;
        });
    let str;
    for(let i=0;i<arr.length;i++){
       
                str= arr.join("-");
            }
     return str;   
}
let Arr1= ['Quick', 'Brown', 'Fox']
console.log(joinWords(Arr1));