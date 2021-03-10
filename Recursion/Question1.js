/*calculate the power of any base*/
function power(x,n){
    if(n===0){
        return 1
    }
    else {
        return x* power(x, n-1);
    }
}
console.log(power(3,3));