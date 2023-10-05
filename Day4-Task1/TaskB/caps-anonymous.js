//b.Convert all the strings to title caps in a string array

const stringArray=["hello javaScript", "javaScript is fun", "using anonymous function"];
const toTitleCase=function(stringArray){
return stringArray.replace(/\w\S*/g, function(txt){
return txt.charAt(0).toUpperCase() +txt.substr(1).toLowerCase();
});
};
const titleCapsArr=stringArray.map(toTitleCase);
console.log(titleCapsArr);
//output :
//0:"Hello Javascript"
//1:"Javascript Is Fun"
//2:"Using Anonymous Function"
//length:3