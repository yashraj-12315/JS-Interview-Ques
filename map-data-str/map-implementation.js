// In case of Object the keys can be only string and Symbol but in case of map keys can be of any data type like Object, Array, etc.

let map = new Map();

//add key-value pair to map
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key}:${value}`);
// }

// const m1 = new Map([
//   ["Rohit", 40],
//   [2, "Rohit"],
//   [true, 11],
//   [[10, 30, 11], "Mohit"],
// ]);

// m1.set({ name: "Yash", age: 20 }, false);

// for (let [key, value] of m1) {
//   console.log(`${key}: ${value}`);
// }

// console.log(m1)

//get value by key
// console.log(map.get('b')); // Output: 2

//check if key exists
// console.log(map.has('a')); // Output: true
// console.log(map.has('d')); // Output: false

//delete a key-value pair
// map.delete('c');
// console.log(map.has('c')); // Output: false

//size of the map
// console.log(map.size); // Output: 2

//iterate over map entries
// for(let [key, value] of map){
//     console.log(`${key}: ${value}`);
// }

//clear the map
// map.clear();
// console.log(map.size); // Output: 0
