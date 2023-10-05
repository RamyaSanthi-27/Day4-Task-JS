//b.Convert all the strings to title caps in a string array
const stringArray=["hello world", "this is test", "concept of javaScript"];
const firstLetterCaps=(stringArray)=>{
  return stringArray
  .split(" ")
  .map((word)=>{
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join(" ");
}
const capsArray=stringArray.map(firstLetterCaps);
console.log(capsArray);
//output :
//0: "Hello World"
//1: "This Is Test"
//2: "Concept Of Javascript"
//length: 3