const p1 = {
  fname: "Yash",
  lname: "Raj",
  age: 18,
};

const p1Proxy = new Proxy(p1, {
  get(target, prop) {
    if(prop in target) {
      return target[prop];
    } else {
      return "Property does not exist";
    }
  },
  set(target, prop, value) {
    if(prop === "age" && value < 0) {
      console.log("Age cannot be negative");
      return false; // prevent setting the age
    }
    target[prop] = value;
    return true; // indicate that the set was successful
  }
});

p1Proxy.age = -10;

console.log(p1Proxy.age); // testing
