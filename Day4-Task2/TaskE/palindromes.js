//e. Return all the palindromes in an array
const words = ["level", "hello", "world", "radar", "javascript"];
const findPalindromes=(arr)=>{
  return arr.filter((word)=>{
    const reversed = word.split('').reverse().join('');
    return word === reversed;
    } ) 
  }
const palindromes = findPalindromes(words);
console.log("Palindromes:", palindromes);
// output
//0: "level"
//1: "radar"
//length: 2