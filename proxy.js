// const p1 = {
//   fname: "Yash",
//   lname: "Raj",
//   age: 18,
// };

// const p1Proxy = new Proxy(p1, {
//   get(target, prop) {
//     if(prop in target) {
//       return target[prop];
//     } else {
//       return "Property does not exist";
//     }
//   },
//   set(target, prop, value) {
//     if(prop === "age" && value < 0) {
//       console.log("Age cannot be negative");
//       return false; // prevent setting the age
//     }
//     target[prop] = value;
//     return true; // indicate that the set was successful
//   }
// });

// p1Proxy.age = -10;

// console.log(p1Proxy.age); // testing

const user = {
  name: "Yash",
  age: 24,
  aadharNumber: "1234-5678-9012",
  panNumber: "ABCDE1234F",
  password: "pass123",
};

const userProxy = new Proxy(user, {
  get(target, prop) {
    if (prop === "aadharNumber") {
      console.log("Sensitive data");
      return "xxxx-xxxx-9012";
    }

    return Reflect.get({ ...arguments });
  },
});

console.log(userProxy.aadharNumber)
