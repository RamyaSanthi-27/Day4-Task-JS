const median = (function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    combinedArray.sort((a, b) => a - b);
    const mid = Math.floor(combinedArray.length / 2);  
    if (combinedArray.length % 2 === 0) {
      return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
      return combinedArray[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  console.log("Median:", median);
  