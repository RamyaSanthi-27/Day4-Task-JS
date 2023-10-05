//c. Sum of all numbers in an array

var numbers=[1,2,3,4,5];
var sumOf = function(numbers){
var sum=0;
for(var i=0;i<numbers.length;i++){
sum=sum+numbers[i];
}
return sum;
}
console.log(sumOf(numbers));
//output : 15