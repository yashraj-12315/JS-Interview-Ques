// creating a set

const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(2); // duplicate

// console.log(mySet);

// creating a set from an array

// const numbers = [1, 2, 3, 3, 4, 5, 5];

// const uniqueNumbers = new Set(numbers);

// console.log(uniqueNumbers);

// const set = new Set();

// set.add("apple");
// set.add("banana");

// console.log(set.has("apple")); // true

// set.delete("apple");

// console.log(set.size); // 1

const email = ["ro@gm", "ra@gm", "ya@gm", "ra@gm"];

const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

// const s1 = new Set(email);

for (let mail of uniqueEmail) {
  console.log(mail);
}
