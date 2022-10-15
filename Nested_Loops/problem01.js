// Problem 1: Print the Calendar date in the below format

// 
let day = 31;
for(let i=1 ; i<=12 ; i++){
  if(i==2){
    day = 28;
    
  }else if(i==4||i==6||i==9||i==11){
    day = 30;

  }else{
    day = 31;
    
  }  
  for(let j=1 ; j<=day ; j++){
    console.log(i+"-"+j);
  }
}









// for(let i=1 ; i<=12 ; i++){
//   for(let j=1 ; j<=31 ; j++){
//     if(i==1||i==3||i==5||i==7||i==8||i==10||i==12){
//       console.log(i+"-"+j);
//     }  
//   }
//   for(let k=1 ; k<=30 ; k++){
//     if(i==4||i==6||i==9||i==11){
//       console.log(i+"-"+k);
//     }
//   }
//   for(let m=1 ; m<=29 ; m++){
//     if(i==2){
//       console.log(i+"-"+m);
//     }
//   }
// }  