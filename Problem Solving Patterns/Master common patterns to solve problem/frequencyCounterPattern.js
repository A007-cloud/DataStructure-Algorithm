// an algorithm that compare objects to objects to retrive values and frequency from object. Does compare object to another object does match frequency (i.e., order) and values do need to retrieve for same. Time complexity is O(N^2).

//     Write a function called sameSquared which accepts two arrays. The function should return true if every value in the first array has its corresponding value squared in the second array. The frequency of the values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

// Write a function called isAnagram which accepts two strings. The function should return true if the two strings parameters are anagrams of each other.

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();

  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

validAnagram('aaz', 'zza'); // false
