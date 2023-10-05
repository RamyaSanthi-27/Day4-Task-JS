const words = ["level", "hello", "world", "radar", "javascript"];
const palindromes = (function(arr) {
  return arr.filter(function(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
})(words);
console.log("Palindromes:", palindromes);
