const prompt = require("prompt-sync")();
let Age= +prompt("Enter your childs age");
let Season= prompt("Enter the season");
if(Age<=0){
    console.log("please enter the valid age");
}
else if(Age<=5){
    if(Season==="Summer"|| Season==="Fall"){
        console.log("The bedtime is 8:30 PM")
    }
    if(Season==="Winter"|| Season=== "Spring"){
        console.log("The bed time is 8:00 PM")
    }
}
else if(Age<=12){
    if(Season==="Summer"){
        console.log("The bedtime is 9:30 PM")
    }
    if(Season==="Winter"|| Season=== "Spring"||Season==="Fall"){
        console.log("The bed time is 8:30 PM")
    }
}
else{
    if(Season==="Summer"){
        console.log("The bedtime is 10:30 PM")
    }
    if(Season==="Winter"|| Season=== "Spring"|| Season==="Fall"){
        console.log("The bed time is 9:30 PM")
    }
}