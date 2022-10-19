// Problem 2 :
// Given a string print, the number of times each character appears

let str = "abhishek"
let obj = {};

for(let i=0 ; i<str.length ; i++){
  if(obj[str[i]] == undefined){
    obj[str[i]] = 1;
  }else{
    obj[str[i]]++;
  }
}    
// console.log(obj);

for(let key in obj){
  console.log(key + " - " + obj[key]);
}