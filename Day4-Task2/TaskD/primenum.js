//d.Return all the prime numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = (() => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return numbers.filter((num) => isPrime(num));
})();
console.log(primeNumbers);
//output : 2 3 5 7 
