// function double() {
//   function execute() {
//     console.log("Hello");
//   }
//   return execute;
// }

// const output = double();
// output();

function double(value) {
  return function execute(num) {
    return num * value;
  };
}

// const output = double(10);
// console.log(output(10));

const output = double(10)(10);
console.log(output);
