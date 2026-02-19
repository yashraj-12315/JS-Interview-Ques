// x=30;
// console.log(`Value of x1 is ${x}`);
// var x=10;
// console.log(`Value of X2 is ${x}`);

console.log("Global Execution Context starts");

var globalVariable = "I am a global variable";

function globalFunction() {
  console.log("Inside global function");
}

console.log(globalVariable);
globalFunction();
console.log("Global Execution Context ends");
