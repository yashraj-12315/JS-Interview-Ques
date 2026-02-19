// Write a function to search "target" in an array "arr" using linear search algorithm. The function should return the index of the target if found, otherwise it should return -1.

// Time Complexity: O(n)
// Space Complexity: O(1)

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found in the array
};

// console.log(linearSearch([1, 4, 3, 2, 6], 3));
// console.log(linearSearch([1, 4, 3, 2, 6], 7));

//Global Linear Search
// Time Complexity: O(n)
// Space Complexity: O(n)

const globalLinearSearch = (arr, target) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      res.push(i); // Target found at index i
    }
  }
  if (res.length === 0) return -1; // Target not found in the array
  return res; // Return all indices where target is found
};

console.log(globalLinearSearch([1, 4, 3, 2, 6, 2], 2));
