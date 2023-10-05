const myArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = (function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(myArray);
console.log("Unique Array:", uniqueArray);
