/**
 * BubbleSort : An algorithm does define the process do cheek condition that need to satisfy. if condition does fulfill element need to swap. Process should be liner and sequential. This algorithm does sort the unsorted array.

This sequential process does have time complexity O(n^2);
 */

function swap(array, indexA, indexB) {
  var temp = 0;

  temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;

  return temp;
}

function bubbleSort() {}
