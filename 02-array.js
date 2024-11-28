//function that finds the maximum and minimum values in an array of numbers
let testArray = [3, 7, 2, 1, 8, 9, 12, 34];
function findMaxMin(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(findMaxMin(testArray));
//this returns array[1,34]

//function that calculates the sum of all elements in an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([12, 12, 3, 2, 1, 2]));
//this returns 32

//write a function that filters elements from an array based on a given condition

/* a function that takes an array of numbers and returns all the numbers less
than 2 in a new array */

function numbersLessThanTwo(testArray) {
  let newArray = [];
  for (x = 0; x < testArray.length; x++) {
    if (testArray[x] <= 2) {
      newArray.push(testArray[x]);
    }
  }
  return newArray;
}
console.log(numbersLessThanTwo([12, 3, 1, 2, 3, 2, 112, , 32, 2, 1]));
//this returns array[1,2,2,2,1]
