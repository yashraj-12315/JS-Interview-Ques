const user1 = {
  fname: "Yash",
  lname: "Raj",
//   greet: function () {
//     return console.log(`Welcome ${this.fname} ${this.lname}`);
//   },
};

function greet() {
  console.log(`Welcome ${this.fname} ${this.lname}`);
}

const user2 = {
  fname: "Ayush",
  lname: "Raj",
//   greet: function () {
//     return console.log(`Welcome ${this.fname} ${this.lname}`);
//   },
};

// greet();

// user1.greet();
// user2.greet();

greet.call(user1);
greet.call(user2);
