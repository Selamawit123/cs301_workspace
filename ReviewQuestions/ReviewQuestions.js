/*A porcupine number is a prime number whose last digit is 9 and the next prime number that 
follows it also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9. 
Write a method named findPorcupineNumber which takes an integer argument n and 
returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
would return 139 (because 139 happens to be the first porcupine number) and so would 
findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which 
is the second porcupine number.
#procupine_number*/
"use strict";
/**
 * 
 * @param {Number} num Given Number
 * @returns {Number} porcupine Number
 */
function  findPorcupineNumber(num){
    let firstPrime =num+1;
    while(true){
        if (isPrime (firstPrime)&& firstPrime %10===9){
            let nextPrime= firstPrime+1 ;
            while(true){
                if(isPrime(nextPrime)){
                    if(nextPrime%10===9){
                        return firstPrime;
                    }
                    else firstPrime=nextPrime;
                    break;
                }
                nextPrime++;
            }
        }
    
     return firstPrime++;
    }
}
 

/**
 * 
 * @param {Number} num Given Number
 * @returns {Boolean} check the number if it is prime number
 */
    function isPrime(num){
    for(let i=2;i<num.length;i++){
        if(num%i!==0){
            return true;
        }
    }
     return false;

}
console.log(findPorcupineNumber(19));
console.log("============================");

/*Question 2. Given an array of integers nums and an integer target, return indices of the two numbers such 
that they add up to target. 
You may assume that each input would have exactly one solution, and you may not use the 
same element twice. You can return the answer in any order.*/

/**
 * 
 * @param {Number} arr Given array of integers
 * @param {Number} target Target number
 * @returns {Number} index of Numbers
 */
function addToTarget(arr, target){
    for(let i=0; i<arr.length;i++){
        let firstValue = arr[i];
        let nextValue= target-firstValue;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]===nextValue){
                return [i,j];
            }
        }
    }
}
console.log(addToTarget([3,4,7,2],10));
console.log("============================");

/* Question 3. Write a function named mostFrequent() that given an array, finds the most frequent element 
in it. If there are multiple elements that appear maximum number of times, returns any one of 
them.*/

/**
 * 
 * @param {Number} arr Given Number
 * @returns {Number} Most frequent element
 */
function mostFrequent(arr){
    arr.sort();
    let maxCount=1;
    let  curCount=1;
    let freqElem= arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]=== arr[i-1]){
        curCount++;
    }
    else{
        if(curCount>maxCount){
            maxCount=curCount;
            freqElem= arr[i-1];
        }
    
        curCount=1;
     }
    }
if(curCount> maxCount){
    maxCount=curCount;
    freqElem=arr[arr.length-1];
}
return freqElem;
}
console.log(mostFrequent([4,6,7,3,4,5,4]));
console.log("============================");

/*Question 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0. 
If there are more than one pair, return any pair.*/
 
/**
 * 
 * @param {Number} arr Given integer number
 * @returns {Number} returns sum to closest to 0
 */
function closestToZero(arr){
   let numGreaterZero=[];
   let firstNum= arr[0];
   let secondNum= arr[1];
   let minSum= Math.abs(firstNum[0]+ secondNum[1]);
    for (let i=1;i<arr.length;i++){
     
        for(let j=i+1;j<arr.length;j++){
            if (Math.abs(arr[i] + arr[j]) <= minSum) {
                minSum = Math.abs(arr[i] + arr[j]);
                firstNum = arr[i];
                secondNum= arr[j];
            }

        }
   }
   numGreaterZero[numGreaterZero.length] = firstNum;
   numGreaterZero[numGreaterZero.length] = secondNum;

    return numGreaterZero;
}
console.log(closestToZero([-2,4,1,-2]));
console.log("============================");

/* Question 5. Write a function, that given two arrays representing two non-negative integers with digits, adds 
the two numbers, and return it as an array.*/

/**
 * 
 * @param {Number} arr1 The first Non-Negative integer
 * @param {Number} arr2 The Second Non-Negative integer
 * @returns {Number} sum
 */
function addTwoNumbers(arr1,arr2){
    let sumArr1 = 0;
    let sumArr2 = 0;
     
    for (let i = 0; i < arr2.length; i++) {
        sumArr2 += (arr2[arr2.length - 1 - i]) * Math.pow(10, i);
    }
    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += (arr1[arr1.length - 1 - i]) * Math.pow(10, i);
    }
    let sum = sumArr1 + sumArr2;
     
    let revNumArr= [];
    while (sum > 0) {
        revNumArr[revNumArr.length] = sum % 10;
        sum = Math.floor(sum / 10);
    }
    return revNumArr;
}

console.log(addTwoNumbers([3, 4, 2], [4, 6, 5]));
console.log("============================");

/* Question 6. Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 and 0.*/
 
/**
 * 
 * @param {String} strNum1 The first String Number
 * @param {String} strNum2  The Second String Number
 * @returns {Number} Sum of binary string
 */
function addBinary(strNum1, strNum2) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < strNum1.length; i++) {
        num1 += Number(strNum1[strNum1.length - 1 - i]) * Math.pow(2, i);
    }
    for (let i = 0; i < strNum2.length; i++) {
        num2 += Number(strNum2[strNum2.length - 1 - i]) * Math.pow(2, i);
    }
    let sum = num1 + num2;
    let rem = [];
    while (sum > 0) {
        rem[rem.length] = sum % 2;
        sum = Math.floor(sum / 2);
    }
    return rem;
}
console.log(addBinary("1010", "1011"));
console.log("============================");

/* Question 7. Given a positive integer, return its corresponding column title as appear 
in an Excel Sheet.For example:   1 →A, 2→B, 3→C,…,26→z,27→AB, →28->AB, ..*/
 
/**
 * 
 * @param {Number} num Given positive integer
 * @returns {String} correspong column title
 */
function columnTitle(num) {
     
    let title = "";
    if (Math.floor(num / 26) === 0) {
        title = String.fromCharCode(64 + num + Math.floor(num / 26));
    } if (Math.floor(num / 26) > 0) {
        title = title + String.fromCharCode(65) + String.fromCharCode(65 + Math.floor(num / 26));
    }
    return title;
}
console.log(columnTitle(69));
console.log("============================");
//Question 8.  Given a column title as appear in an excel sheet, return its corresponding column number.
 
/**
 * 
 * @param {Number} num Number 
 * @returns {String} corresponding column
 */
function columnNumber(num) {
    let num1 = num;
    if (num1 <= 0) return "";
    num1 = num - 26;
    return String.fromCharCode(64 + num) + String.fromCharCode(65 + (num1));
}
console.log(columnNumber(16));
console.log("============================");
/* Question 9. A strobogrammatic number is a number that looks the same when rotated 180 degree (looked 
upside down)
Write a function to determine if a number is strobogrammatic. The number is represented as 
string.*/
 
/**
 * 
 * @param {Number} num numbers to be checked
 * @returns {Boolean} Checked Numbers
 * 
 */
function strobogrammaticNumber(num){
    for(let i=0, j=num.length-1;i<=j;i++,j--){
        let nums= num[i]+""+num[j]+"";
        if(nums!=="00"&& nums!=="11"&& nums!=="88"&&nums!=="69"&&nums!=="96"){
            return false;
        }
    }
    return true;
}

console.log(strobogrammaticNumber("98"));
console.log("============================");
/* Question 10.Given an array containing n distinct numbers taken from 0,1,2,…,n, find the one that is missing */
/**
 * 
 * @param {Number} num Numbers Listed
 * @returns {Number} missed Number
 */
function missingNumber(num){
    if (num===null||num.length===0)
    {return 1;}
     let containsOne=0;
    for(let i=0; i<num.length;i++){
        if(num[i]===1){
            containsOne=1;
        }
        else if(num[i]<=0||num[i]>num.length){
            num[i]=1;
        }
    }
    if (containsOne===0){
        return 1;
    }
    for(let i=0;i<num.length;i++){

        let index= Math.abs(num[i])-1;
        if(num[index]>0){
            num[index]= -1*num[index];            
        }
    }
    for(let i=0; i<num.length;i++){
        if(num[i]>0){
            return i+1;
        }
    }
}

console.log(missingNumber([0,1,2,4]));
console.log("============================");
/* Question 11. Given a sorted array and a target value, return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.
You may assume no duplicates in the array.*/ 
/**
 * 
 * @param {Number} arr Given Array
 * @param {Number} target Targeted Number
 * @returns {Number} index
 */
function searchInsertPosition(arr, target) {
    let targetIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            targetIndex = i;
            break;
        } else if (arr[i] > target) {
            targetIndex = i;

            break;
        }
        else if (arr[i] < target) {
            targetIndex = arr.length;

        }
    }
    return targetIndex;
}
console.log(searchInsertPosition([0, 2, 3, 4, 8], 3));
console.log("============================");
/* Question 12. Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.*/
 
/**
 * 
 * @param {Number} nums integer array numbers 
 * @returns {Number} largest sum
 */
function maxSubArray(nums){    
    let currentMax=nums[0];
    for (let i=1; i<nums.length;i++){
      nums[i]= Math.max(nums[i], nums[i]+nums[i-1]);
      currentMax= Math.max(currentMax,nums[i]);
    }
   return currentMax;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log("============================");
/* Question 13. Given an array of integers and an integer k, find out whether there are two distinct indices i and 
j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most 
k.*/
 
/**
 * 
 * @param {Number} nums Array of an integers
 * @param {Number} dist Distance between Duplicate numbers
 * @returns {boolean} true or false
 */
function containDuplicates(nums, dist){
    let numsMap= new Map();
    for (let i=0; i<nums.length;i++){
        if(numsMap.has(nums[i])&& i-numsMap.get(nums[i])<=dist){
        return true;
        }else{
            numsMap.set(nums[i],i);
        }
    }
    return false;
}
console.log(containDuplicates([1,0,1,1],1));
console.log(containDuplicates([1,2,3,1,2,3],2));
console.log("============================");
/* Question 14. Given a list of words and two words word1 and word2, return the 
shortest distance between these two words in the list. */
 
/**
 * 
 * @param {String} str A list of words
 * @param {String} word1 The first word
 * @param {String} word2 The second Word
 * @returns {Number} Distance
 */
function shortestDistance(str,word1,word2){
    if(str.indexof)
    str=str.split(" ");
    let word1Idx=0;
    let word2Idx=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===word1){
            word1Idx=i;
        }if(str[i]===word2){
            word2Idx=i;
        }
    }
    let distance=Math.abs(word2Idx-word1Idx);
        return distance;
}
console.log(shortestDistance("Introduction to javascript is done","Introduction","is"));
console.log("============================");
/* Question 15. Given an array nums, write a function to move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.*/
 
/**
 * 
 * @param {Number} arr  An array nums
 * @returns {Number} Zeros at the last
 */
function moveZeros(arr){
   let NonZeros=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]!==0){
            arr[NonZeros]=arr[i];
            NonZeros++;
        }
    }
    
    for (let i= NonZeros; i<arr.length;i++){
        arr[i] = 0;
    }
    return arr;
}

console.log(moveZeros([1,0,2,0,9,3,0]));
console.log("============================");

/* Question 16. Write a function that takes a string as input and reverse only the vowels of a string.
 # reverse_vowels_of_a_string*/
  
 /**
  * 
  * @param {String} str String to be reversed
  * @returns {String} reversed vowels
  */
function reverseVowels(str) {
    str = str.split("");
    let revStr = [];
    let vowels = [];
    for (let i = 0; i < str.length; i++) {                             
        if (isVowel(str[i])) {
            vowels[vowels.length]=(str[i]);
        } else if (!isVowel(str[i])) {
            revStr[i] = (str[i]);
        }
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (revStr[i] === undefined) {
            revStr[i] = vowels[vowels.length - 1 - j];
            j++;
        }
    }
    revStr = revStr.join("");
    return revStr;
    
}
console.log(reverseVowels("hello"));
/**
 * 
 * @param {String} str Give String
 * @returns {Boolean}   Vowel Checking
 */
function isVowel(str) {
    if (str === "A" || str === "a" || str === "I" || str === "i" || str === "O" ||
        str === "o" || str === "I" || str === "i" || str === "U" || str === "u") {
        return true;
    }
    return false;
}

 




 
