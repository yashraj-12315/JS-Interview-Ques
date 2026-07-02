/**
 * Move all zeroes to the end while maintaining
 * the relative order of non-zero elements.
 */

function moveZeroes(arr) {
  // j stores the index where the next non-zero
  // element should be placed.
  let j = 0;

  // Traverse the entire array.
  for (let i = 0; i < arr.length; i++) {

    // If the current element is non-zero,
    // swap it with the element at index j.
    if (arr[i] !== 0) {

      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];

      // Move j to the next position.
      j++;
    }
  }

  return arr;
}

// Test Cases
console.log(moveZeroes([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]

console.log(moveZeroes([4, 0, 5, 0, 3]));
// Output: [4, 5, 3, 0, 0]

console.log(moveZeroes([0, 0, 1]));
// Output: [1, 0, 0]

console.log(moveZeroes([1, 2, 3]));
// Output: [1, 2, 3]