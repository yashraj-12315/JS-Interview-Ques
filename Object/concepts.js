
// const user = {
//     name: "Yash Raj",
//     age: 25,
//     address: "Saharsa"
// }

// for getting keys

// for (let keys in user){
// console.log(keys)
// }

// for getting values

// for (let keys in user){
//     console.log(user[keys])
// }

// I want to get the name and age

// const name = user.name;
// const age = user.age;

// but above one is older way, we use the modern approach like destructuring for extracting the value

// const {name,age} = user;

// const {name:username,age:userage} = user;

// console.log(name , age)

// console.log(username,userage);

// In case of array destructuring

// const arr = [10, 20, 40, 90, 11];

// const [first, second] = arr;

// console.log(first, second);

// for (let keys of Object.keys(user)){
//     console.log(keys)
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for (let [key, value] of Object.entries(user)) {
//     console.log(key + ": " + value)
// }

const user = {
    name: "Yash Raj",
    age: 25,
    address: "Saharsa",
    greeting: function () {
        // console.log(`Strike is coming on 18th October ${user.name}`);
        console.log(`Strike is coming on 18th October ${this.name}`)
        return 18;
    }
}

// const date = user.greeting();
// console.log(date);

// const user2 = {
//     name: "Ayush",
//     age: 23,
//     address: "Patna"
// }

// user2.greeting = user.greeting;

// user2.greeting();

// nested object

const user3 = {
    name: "Yash",
    age: 20,
    amount: 2000,
    address: {
        city: "Saharsa",
        state: "Patna"
    }
}

// console.log(user3);

// const user4 = user3;
// In the above line both user4 and user are pointing to the same refernce but when we use spread operator it points to the different refernce.
// by using spread operator independent copy is created.
// spread operator handles only one level of nesting 

// shallow copy
// const user4 = {...user3};
// user4.name = "Ayush";
// user4.address.city = "Purnia"; // issue lies here spread operator doesn't help in nested object

// deep copy can handle nested object

// const user4 = structuredClone(user3);
// user4.address.city = "Purnia";


// console.log(user4);
// console.log(user3);

// In JavaScript, object property keys can only be of two types: String and Symbol. Any key that is not a symbol (such as numbers, booleans, or objects) is automatically converted to a string before being stored.


const sym = Symbol("id");

const user5 = {
    name: " Rohit",
    age: 20,
    0: 100,
    1: "Mohan",
    [sym]: "Hello Jee"
}

console.log(user5);
// console.log(user5[sym])