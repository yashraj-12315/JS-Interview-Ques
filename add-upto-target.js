// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
// 	•	You cannot use the same element twice
// 	•	Return the answer in any order

// Using Hash Map

// function twoSum(nums, target) {
//   const map = new Map(); // value -> index

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }

//     map.set(nums[i], i);
//   }

//   return [];
// }

// Test
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

//Time: O(n) (single loop)
//Space: O(n) (map storage)

//  Brute Force

function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSumBrute([2, 7, 11, 15], 9)); // [0, 1]

// Time: O(n²) (nested loops)
// Space: O(1) (no extra space used)
