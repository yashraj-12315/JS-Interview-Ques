// const printNumbers = () => {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000*i);
//   }
// };

// printNumbers();

// In the above code, we are using var to declare the variable i. Since var is function-scoped, the value of i will be 6 by the time the setTimeout callback is executed. Therefore, it will print 6 five times after 1 second. To fix this issue, we can use let instead of var, which is block-scoped and will create a new binding for each iteration of the loop.

const printNumbers = () => {
  for (var i = 1; i <= 5; i++) {
    (function (x) {
      setTimeout(() => {
        console.log(x);
      }, 1000 * x);
    })(i);
  }
};

printNumbers();
