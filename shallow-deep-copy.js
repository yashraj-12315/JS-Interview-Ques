// ==========================================================
// SHALLOW COPY vs DEEP COPY IN JAVASCRIPT
// ==========================================================
//
// A copy of an object can be created in two ways:
//
// 1. Shallow Copy
//    - Copies only the first level of the object.
//    - Nested objects/arrays are NOT copied.
//    - They are shared between the original and copied object.
//
// 2. Deep Copy
//    - Copies every level of the object.
//    - Nested objects/arrays are also duplicated.
//    - Changes in the copied object do NOT affect the original.
//
// ==========================================================



// ==========================================================
// Example 1: Shallow Copy with Primitive Values
// ==========================================================

const original = {
    name: "Yash",
    age: 25
};

// Spread operator (...) creates a SHALLOW COPY.
//
// Since this object contains only primitive values,
// every property gets copied by value.
const copy = { ...original };

console.log("Original:", original);
console.log("Copy:", copy);

// Modify the copied object's primitive property
copy.name = "Ayush";

console.log("\nAfter changing copy.name");

// Primitive values are independent,
// so the original object remains unchanged.
console.log("Original name:", original.name); // Yash
console.log("Copy name:", copy.name);         // Ayush



// ==========================================================
// Example 2: Shallow Copy with Nested Object
// ==========================================================

const original1 = {
    name: "Yash",
    age: 25,
    address: {
        state: "Bihar",
        city: "Patna"
    }
};

// Spread operator copies ONLY the first level.
//
// The 'address' object is NOT duplicated.
// Both objects share the same address reference.
const copy1 = { ...original1 };

console.log("\nOriginal1:", original1);
console.log("Copy1:", copy1);

// Modify the nested object in the copied object
copy1.address.state = "UP";

console.log("\nAfter changing copy1.address.state");

// Since address is shared,
// the original object also gets updated.
console.log("Original state:", original1.address.state); // UP
console.log("Copy state:", copy1.address.state);         // UP

// Check if both objects share the same address object
console.log(
    "Same address reference:",
    original1.address === copy1.address
); // true



// ==========================================================
// Example 3: Deep Copy using structuredClone()
// ==========================================================

const original2 = {
    name: "Yash",
    age: 25,
    address: {
        state: "Bihar",
        city: "Patna"
    }
};

// structuredClone() creates a DEEP COPY.
//
// Every nested object and array is duplicated.
// The copied object becomes completely independent.
const copy2 = structuredClone(original2);

console.log("\nOriginal2:", original2);
console.log("Copy2:", copy2);

// Modify nested object
copy2.address.state = "UP";

console.log("\nAfter changing copy2.address.state");

// Original object remains unchanged
console.log("Original state:", original2.address.state); // Bihar
console.log("Copy state:", copy2.address.state);         // UP

// Now both objects have different references
console.log(
    "Same address reference:",
    original2.address === copy2.address
); // false



// ==========================================================
// Memory Representation
// ==========================================================

/*

1. Shallow Copy

original1
   │
   ├── name -----> "Yash"
   ├── age ------> 25
   └── address -----------┐
                           │
copy1                      │
   │                       │
   ├── name -----> "Yash"  │
   ├── age ------> 25      │
   └── address ------------┘

Both objects point to the SAME address object.

Changing:
copy1.address.state = "UP"

also changes

original1.address.state


------------------------------------------------------------

2. Deep Copy

original2
   │
   ├── name -----> "Yash"
   ├── age ------> 25
   └── address -----> { state: "Bihar" }

copy2
   │
   ├── name -----> "Yash"
   ├── age ------> 25
   └── address -----> { state: "Bihar" }

Both address objects are completely different.

Changing:
copy2.address.state = "UP"

does NOT affect

original2.address.state

*/


// ==========================================================
// When should you use which?
// ==========================================================

/*

Use Spread Operator (...)

✔ Flat objects
✔ React state updates
✔ When there are no nested objects

Example:
const copy = { ...original };

------------------------------------------------------------

Use structuredClone()

✔ Nested objects
✔ Nested arrays
✔ Complex JSON-like data
✔ When you need a completely independent copy

Example:
const deepCopy = structuredClone(original);

------------------------------------------------------------

Interview Definition

Shallow Copy:
Copies only the first level of an object.
Nested objects are copied by reference.

Deep Copy:
Recursively copies every nested object and array,
creating a completely independent object.

*/