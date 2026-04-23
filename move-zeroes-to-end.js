//move all 0s to the end while keeping the order of other elements intact
//Approach (In-place, O(n))
// * Use a pointer j to track where the next non-zero element should go
// * Iterate through the array
// * Swap non-zero elements forward
// move all 0s to the end while keeping the order of other elements intact
function moveZeroes(nums) {
  let j = 0; // position for next non-zero

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap nums[i] and nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
}

// Example
let nums = [2, 0, 4, 1, 0, 8];
console.log(moveZeroes(nums));
// Output: [2, 4, 1, 8, 0, 0]

// 2nd approach  Alternative (Simpler but uses extra space)
const arr = [2, 0, 4, 1, 0, 8];
let nonzeroes = arr.filter((num) => num !== 0);
let zeroes = arr.filter((num) => num == 0);

let result = [...nonzeroes, ...zeroes];
console.log(result);
