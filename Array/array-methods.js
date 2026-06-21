// let arr = [ 10,30,50,90,11];

// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i])
// }
// console.log(" ")

// for of 

// for(let num of arr){
//     console.log(num)
// }


// const arr = [10, 30, 50, 90, 11];
// const arr2 = ["Rohit", 11, true];

// arr.push(arr2);

// const arr3 = arr.concat(arr2)
// console.log(arr3);

// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// const names = ["Yash","Ayush","Charlie"];

// join() method is used to convert array into string  using the required delimeter

// console.log(names.toString());
// console.log(names.join("-"));

// const a = ["101","90","80","32","91"];
// const arr = [10,"Rohit","Mohan",true];

// arr.sort();
// console.log(a);

// const a = [10, 40, 31, 49, 56];

// console.log(a.sort())

//for ascending
// console.log(a.sort((a, b) => a - b))

// for descending
// console.log(a.sort((a, b) => b - a))


const arr = [10,30,50,[40,90, [60,19,99],11],80];

const a = arr.flat(Infinity)
console.log(a);





