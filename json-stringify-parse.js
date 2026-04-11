// JSON.stringify() is a JavaScript method used to convert a JavaScript object or value into a JSON string.

// In simple words:
// ➡️ It turns JavaScript data into a string format that can be sent over the network or stored.

// const user = {
//   name: "Yash",
//   age: 25,
//   city: "Bhubaneswar",
// };

// const jsonString = JSON.stringify(user);

// console.log(user); { name: 'Yash', age: 25, city: 'Bhubaneswar' }
// console.log(typeof user);

// console.log(jsonString); {"name":"Yash","age":25,"city":"Bhubaneswar"}
// console.log(typeof jsonString);

// Formatting JSON

const user = {
  name: "Yash",
  age: 25,
};

console.log(JSON.stringify(user, null, 2));

// Why JSON.stringify() is Used

// 1️⃣ Sending data to APIs

// fetch("/api", {
//   method: "POST",
//   body: JSON.stringify({ name: "Yash" })
// });

// 2️⃣ Storing in LocalStorage
// localStorage.setItem("user", JSON.stringify(user));

// 3️⃣ Debugging Objects
// console.log(JSON.stringify(obj));

// The opposite method is JSON.parse()

const str = '{"name":"Yash"}';

const obj = JSON.parse(str);

console.log(obj.name); // Yash

// JSON.stringify()
// Convert JS object → JSON string
// JSON.parse()
// Convert JSON string → JS object

// You cannot pass a JavaScript object directly in the body of fetch() when sending JSON. You must convert it to a string using JSON.stringify().

// ❌ Incorrect (Object directly)
// fetch("/api", {
//   method: "POST",
//   body: { name: "Yash" }   // Not valid
// });

// Why this is wrong:
// •	fetch() expects the body to be one of these types:
// •	string
// •	FormData
// •	Blob
// •	ArrayBuffer
// •	URLSearchParams

// •	A plain JavaScript object is not a valid body type, so it will not be sent properly.

// ✅ Correct Way (Convert to JSON string)
//     fetch("/api", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name: "Yash" })
// });

// Here:
// 	•	JSON.stringify() converts the object → JSON string
// 	•	Content-Type: application/json tells the server the format of the data.


// Exception (When you don’t need JSON.stringify())

// If you use FormData:

// const formData = new FormData();
// formData.append("name", "Yash");

// fetch("/api", {
//   method: "POST",
//   body: formData
// });

// Here no JSON conversion is needed.