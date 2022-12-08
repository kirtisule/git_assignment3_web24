//   Q1. Check Number is Promise.

       let num=13;
       let count=0;
   for(let i=0;i<=num;i++){
       if(num%i==0){
         count++;
       }
   }
//    console.log(count)
   
   if(count==2){
      console.log("Yes");
   }else{
       console.log("No");
   }