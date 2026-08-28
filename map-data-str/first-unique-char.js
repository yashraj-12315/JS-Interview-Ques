class Solution {
  firstUnique(s) {
    // Step 1: Create a Map to store frequency of each character
    const map = new Map();

    // Step 2: Count frequency of each character in string
    for (let ch of s) {
      // If character already exists → increment count
      // Else → initialize with 1
      map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Step 3: Traverse string again to find first unique character
    for (let ch of s) {
      // If frequency is 1 → this is the first unique character
      if (map.get(ch) === 1) return ch;
    }

    // Step 4: If no unique character found → return -1
    return -1;
  }
}