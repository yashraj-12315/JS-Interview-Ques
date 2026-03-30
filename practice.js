
// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// console.log(map.get('b'));

// x=30;
// console.log(`Value of X1 is ${x}`);
// var x=10;
// console.log(`Value of X2 is ${x}`);

const arr= [1,2,3,4,5];

const res = arr.reduce((acc,curr)=>{
    return acc+curr;
},0);

console.log(res);