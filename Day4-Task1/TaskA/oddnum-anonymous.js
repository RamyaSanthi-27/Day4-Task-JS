//a.Print odd numbers in an array

var number=[1,2,3,4,5,6,7,8,9,10];
var printOddNumber=function(number){
for(var i=0;i<number.length;i++){
if(number[i]%2!==0){
console.log(number[i]);
        }
    }
}
printOddNumber(number);
//out put: 1 3 5 7 9