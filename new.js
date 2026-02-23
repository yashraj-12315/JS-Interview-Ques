function twoSum(nums, target) {
  const map = {}; // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // check if complement exists
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    // store current number with index
    map[nums[i]] = i;
  }

  return []; // fallback
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]