// Input: "the sky is blue"
// Input: " hello w5rld "
// Input: "a good example"

// Output: "blue is sky the"
// Output: "world hello"
// Output: "example good a"

// Ques 1 : Given an input string s, reverse the order of the words

// const reverseWords = function (s) {
//   const splits = s.split(" ");
//   const stack = [];

//   // Step 1: Push valid words into stack
//   for (let word of splits) {
//     if (word !== "") {
//       stack.push(word);
//     }
//   }

//   // Step 2: Pop from stack to reverse
//   let finals = "";

//   while (stack.length) {
//     finals += stack.pop() + " ";
//   }

//   return finals.trim();
// };

// console.log(reverseWords("the sky is blue")); // "blue is sky the"
// console.log(reverseWords(" hello world "));   // "world hello"

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};
console.log(reverseWords("Hello   World  "));
