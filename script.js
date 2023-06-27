// Good Luck 💪🏾
function findLargestNumbers(arr) {
    let largestNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      let subarray = arr[i];
      let largestNumber = subarray[0];
  
      for (let j = 1; j < subarray.length; j++) {
        if (subarray[j] > largestNumber) {
          largestNumber = subarray[j];
        }
      }
  
      largestNumbers.push(largestNumber);
    }
  
    return largestNumbers;
  }
  var result = findLargestNumbers([[7, 3, 8, 11], [54, 12, 43, 77], [16, 11, 8]]);
  console.log(result); 
  
  var result2 = findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]]);
  console.log(result2); 