const prompt= require("prompt-sync")();
let Student_name= prompt("Enter the student name");
let Credits= +prompt("Enter the number of completed credits");
if(Credits<=0){
    console.log("Please enter the valid entry");
}
else if(Credits < 30){
    console.log(Student_name + " is Freshman Student");
}
else if(Credits <60){
    console.log(Student_name + " is a Sophomore Student");
}
else if(Credits <90){
    console.log(Student_name + " is a Junier Student");
 }
 else{
     console.log(Student_name + " is a Senior Student")
 }
