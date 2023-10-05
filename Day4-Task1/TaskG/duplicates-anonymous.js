//g.Remove duplicates from an array

const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };
  const myArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(myArray);
  console.log("Unique Array:", uniqueArray);
//output:
//(5) [1, 2, 3, 4, 5]  