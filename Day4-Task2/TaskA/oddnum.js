//a.	Print odd numbers in an array
const num=[1,2,3,4,5,6,7,8,9,10];
var oodNum=(arr)=>{
  for(var i=0;i<num.length;i++){
    if(num[i]%2!==0){
      console.log(num[i]);
    }
  }
}
oodNum();
//output : 1 3 5 6 7 9