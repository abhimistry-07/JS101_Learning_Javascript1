// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let sto_username = "masai_school";
let sto_pass = 123456;
let in_username = "masai_school";
let in_pass = 123456;

if(sto_username == in_username){
  if(sto_pass == in_pass){
    console.log("Log in Successfull");
  }else{
    console.log("Incorrect Password");
  }
}else{
  console.log("Incorrect Username");
}
