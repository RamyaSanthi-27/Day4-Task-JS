//e. Return all the palindromes in an array

const findPalindromes = function(arr) {
    return arr.filter(function(word) {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
    });
  };
  const words = ["level", "hello", "world", "radar", "javascript"];
  const palindromes = findPalindromes(words);
  console.log("Palindromes:", palindromes);
//output: 
//0:"level"
//1: "radar"
//length: 2
 