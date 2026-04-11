// missing number in an array (1 to N)

// const arr = [1, 2, 3, 4, 6];
// let n = arr.length + 1;

// let expectedSum =(n * (n+1))/2 ;

// let actulaSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   actulaSum += arr[i];
// }

// let missing = expectedSum - actulaSum;
// console.log(missing);

//missing number in an array from (n to m)

const arr = [5, 6, 7, 8, 10];

for (i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] !== arr[i] + 1) {
    console.log(arr[i] + 1);
  }
}
