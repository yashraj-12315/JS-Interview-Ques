// Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target =9
// Input: nums = [-1,0,3,5,9,12], target =2

// ----- >>>>> Output: 4
// ----- >>>>> Output: -1

// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }
  return -1; // Target not found in the array
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
