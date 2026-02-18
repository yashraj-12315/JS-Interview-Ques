// In JS everything is an object

// const p1={
//     fname:'Yash',
//     lname:'Sharma',
//     age:22,
//     getFullName:function(){
//         return this.fname + ' ' + this.lname;
//     }
// }

// const p2=Object.create(p1); // p2 inherits from p1

// console.log(p2.fname);

const p1={
    xp1:"I am inside P1"
};

const p2={
    xp2:"I am inside P2",
    __proto__:p1 // p2 inherits from p1
}

const p3={
    xp3:"I am inside P3",
    __proto__:p2 // p3 inherits from p2
}

console.log(p3.xp1); // p3 can access xp1 because it inherits from p2 which inherits from p1