// function sumOfDigits(num) {
//   let sum = 0;
//   const numStr = Math.abs(num).toString(); // Handle negative numbers

//   for (let i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i], 10);
//   }

//   return sum;
// }

// // Example usage:
// console.log(sumOfDigits(123)); // Output: 6
// console.log(sumOfDigits(-456)); // Output: 15

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(2345))
