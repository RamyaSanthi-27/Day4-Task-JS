//d. Return all the prime numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = function (num) {
  if (num <= 1) {
    return false;
 	 }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
   		 }
 	 }
  return true;
};
const primeNumbers = numbers.filter(function (num) {
  return isPrime(num);
});
console.log(primeNumbers);
//output:
//0:2
//1:3
//2:5
//3:7
//length:4