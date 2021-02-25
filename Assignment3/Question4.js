const prompt= require("prompt-sync")();
let Status = prompt("Enter the status of the person ");
let Number_Of_Books_Overdue= +prompt("Enter the number of books overdue ");

if (Status==="Student"){
    if(Number_Of_Books_Overdue<0){
        console.log("Please enter the valid number");
    }
    else if(Number_Of_Books_Overdue===0){
        console.log("You can borrow it for 6 weeks");
    }
    else if(Number_Of_Books_Overdue<3){
        console.log("You can borrow it for 4 weeks");
    }
    else if(Number_Of_Books_Overdue>=3){
        console.log("You can borrow it for 2 weeks");
    }
}
else if (Status==="Faculity"){
    if(Number_Of_Books_Overdue<0){
        console.log("Please enter the valid number");
    }
    else if(Number_Of_Books_Overdue===0){
        console.log("You can borrow it for 12 weeks");
    }
    else if(Number_Of_Books_Overdue<3){
        console.log("You can borrow it for 10 weeks");
    }
    else if(Number_Of_Books_Overdue>=3){
        console.log("You can borrow it for 8 weeks");
    }
}
else if(Status==="Other"){
    if(Number_Of_Books_Overdue<0){
        console.log("Please enter the valid number");
    }
    else if(Number_Of_Books_Overdue===0){
        console.log("You can borrow it for 4 weeks");
    }
    else if(Number_Of_Books_Overdue<3){
        console.log("You can borrow it for 3 weeks");
    }
    else if(Number_Of_Books_Overdue>=3){
        console.log("You can borrow it for 2 weeks");
    }
}
