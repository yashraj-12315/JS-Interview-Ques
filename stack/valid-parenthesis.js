function isValid(s) {
  const stack = [];
  // for (char of s){}
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // Step 1: Push opening brackets first
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }

    // Step 2:Handle closing brackets
    else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) return false; // No opening bracket to match

      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false; // Mismatched brackets
      }
    }
  }
  // Step 3: After processing all characters, check if stack is empty
  return stack.length === 0; // Valid if no unmatched opening brackets remain
}

console.log(isValid("(){"));
