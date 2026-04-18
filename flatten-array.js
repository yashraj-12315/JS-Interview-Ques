// Flattening a nested array = converting something like [1, [2, 3], [4, [5]]] into a single-level array.

// 1. Using flat() (easiest)
// const arr = [1, [2,3],[4,[5]]];

// const result = arr.flat(2);
// console.log(result);

// Array.isArray(curr) -> Checks if element is nested

// concat() -> Merges arrays
// [1,2].concat([3,4]) → [1,2,3,4]

//2. Using reduce() (interview favorite) Recursion approach

// function flatten(arr) {
//   return arr.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
//     [],
//   );
// }

// console.log(flatten([1, [2, 3], [4, [5]]]));

// Using flatMap() (for 1-level only)

const arr = [1,[2,3],4];
const result = arr.flatMap(x=>x);

console.log(result);
