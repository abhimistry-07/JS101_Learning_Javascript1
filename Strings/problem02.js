// Problem 2 : Given an array of string count the overall total number of characters

let arr = ["Gujarati", "Hindi", "English"];
let count = 0;

for(let i=0 ; i<arr.length ; i++){
  count+=arr[i].length;
}
console.log(count);