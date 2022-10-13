// Problem 1 : Given a string count the number of words in that string

let str = "I am Abhishek.";
let count = 0;

for(let i=0 ; i<str.length ; i++){
  if(str[i]==" "){
    count++;
  }
}
if(str.length!=0){
  console.log(count+1);
}else{
  console.log("String is Empty");
}