/*Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.”*/
const prompt= require("prompt-sync")();
let Guess_Pin= prompt("Guess the pin number");
const pin= 3456;
// const NumberOfTries = 3;
// for (i=1; i<=NumberOfTries;i++){
//     if(Guess_Pin===pin){
//        console.log("Correct, welcome back");
//     }
     
//     if(Guess_Pin!=pin){
//        console.log( prompt ("Incorrect, try again"));
       
//     }
let count=1;

   


   
   while(true){
      if(Guess_Pin===pin){
         console.log("Correct pin");
         break;
      }
     if(Guess_Pin!==pin&&count!==3){
console.log(prompt(" Incorrect pin,Please try again"));
        count++;
     }
        else if(Guess_Pin===pin){
           console.log("Correct pin");
        
        continue;
   }
      else if(Guess_Pin!==pin&&count==3)  {
            console.log("locked out");
          
      }
     break;
   }







    