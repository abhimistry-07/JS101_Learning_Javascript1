// Problem 1 :
// Given an array find the unique items in the array

let arr = ['Aman', 'Chunnu', 'Munnu', 'Ramu', 'Chunnu', 'Abhi', 'Anshu', 'Aman'];

let obj = {};

for(let i=0 ; i<arr.length ; i++){
  let key = arr[i];
  obj[key] = 1;
}
console.log(obj);
