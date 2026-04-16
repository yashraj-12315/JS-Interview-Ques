// check whether all the numbers in an array are positive.

// function allPositive(arr) {
//   for (let num of arr) {
//     if (num < 0) return false;
//   }
//   return true;
// }

// console.log(allPositive([2, -4, 6, 8]));

// using every

function allPositive(arr) {
  return arr.every((num) => num > 0);
}

console.log(allPositive([2, 4, 6, 8]));
