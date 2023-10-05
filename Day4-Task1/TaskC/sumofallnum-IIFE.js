var numbers=[1,2,3,4,5];
(function sumOf(numbers){
var sum=0;
for(var i=0;i<numbers.length;i++){
sum=sum+numbers[i];
}
console.log(sum);
})(numbers);
