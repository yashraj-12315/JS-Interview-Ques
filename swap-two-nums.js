//using temp variable

// function swapTwoNums(a, b) {
//     let temp=a;
//     a=b;
//     b=temp;

//     return [a,b]
// }

// console.log(swapTwoNums(2,5))

//using destructuring

// function swapTwoNums(a,b){
//     return [a,b] = [b,a]
// }

// console.log(swapTwoNums(2,5))

// using addn and subn

// function swapTwoNums(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;

//     return [a,b]
// }

// console.log(swapTwoNums(2,5))

// using mul and div

// function swapTwoNums(a,b){
//     a=a*b;
//     b=a/b;
//     a=a/b;

//     return [a,b]
// }

// console.log(swapTwoNums(2,5))

// using axor operation

// function swapTwoNums(a, b) {
//   a = a ^ b;
//   b = a ^ b;
//   a = a ^ b;

//   return [a, b];
// }

// console.log(swapTwoNums(2,5))

function swapTwoNums(a, b) {
  a = a + b - (b = a);

  return [a, b];
}

console.log(swapTwoNums(2,5))