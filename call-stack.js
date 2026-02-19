// console.log("Start of script 2");

// setTimeout(()=>{console.log("A")},0)

// setTimeout(()=>{console.log("B")},0)

// setTimeout(() => {
//     console.log("C")
// }, 2000);

// console.log("End of script");

// console.log("Bye Bye")

console.log("Start of script 3");

setTimeout(()=>{console.log("This is from the Task Queue (setTimeout)")},0);

Promise.resolve().then(()=>console.log("This is from the Microtask Queue (Promise)"));

console.log("End of script");