/**
 * MargeSort : An sorting algorithm does follow divide and conqure algorithm. It divide an array in subarrays, until array get exhausted. It divide and it conquire the subarrays to find the order does define sorting algorithms.

Each subarrarrays need to marged in order to get final sorted array. The process to marged subarrays is sequential and does have logarithmic time complexity to follow.

Time complexity : O(nlog2(n))
space complexity : O(n)
 */

// const margedSortedList (leftA, rightA) {
//     var sortedList = [];
//     var leftIndex = 0;
//     var rightIndex = 0;
//     while (leftIndex < leftA.length && rightIndex < rightA.length) {
//         if(leftA[leftIndex] <= rightA[rightIndex]) {
//             sortedList.push(leftA[leftIndex++]);
//         } else {
//             sortedList.push(rightA[rightIndex++]);
//         }
//     }

// }
