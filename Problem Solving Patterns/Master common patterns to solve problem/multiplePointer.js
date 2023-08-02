// Miltiple Pointer an problem solving approach does define an approach to solve the problem do return an pair of array elements. The sum of those two pair elements is the targer element may or may not exist in array. To solve this type of problem we use O(N^2) approach do define the process so return elements must be in pair of array elements. In this process Space Complexity should be O(1) do consider Naive solution. Need to create pointers or values do corresponds to index of array elements do consider as start or end. Pointers do move towards middle, end or beginning, do find pairs that evaluates to targert values do need.

/*problem statement : write an function called sunZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to Zero or undefined if a pair doesnot exist.*/

//Naive solution
/*var array = [-3, -2, -1, 0, 1, 2, 3];
function sumZero(array) {
  for (var i = 0; i <= array.length; i++) {
    for (var j = i + 1; j <= array.length; j++) {
      if (array[i] + array[j] === 0) {
        // return [array[i], array[j]];
        console.log([array[i], array[j]]);
      }
    }
  }
}

// console.log(sumZero(array));
sumZero(array); */

// Refactor Solution

var array = [-3, -2, -1, 0, 1, 2, 3];
function sumZero(array) {
  var left = 0;
  var right = array.length - 1;
  if (left < right) {
    var sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// sumZero(array);
console.log(sumZero(array));
