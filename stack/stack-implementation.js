// class is a template for creating objects. It encapsulates data and functions that operate on that data. In JavaScript, classes were introduced in ES6 as syntactical sugar over the existing prototype-based inheritance. A class can have a constructor method for initializing objects, and it can also have other methods to define the behavior of the objects created from the class.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  printStack() {
    // Method 1 (clean)
    return this.stack.join(" ");

    // Method 2 (manual loop)
    // let result = "";
    // for (let i = 0; i < this.stack.length; i++) {
    //   result += this.stack[i] + " ";
    // }
    // return result.trim();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.peek()); // Output: 3
// console.log(stack.pop()); // Output: 3
// console.log(stack.isEmpty());
// console.log(stack.size());
console.log(stack.printStack());
