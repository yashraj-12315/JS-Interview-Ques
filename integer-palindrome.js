// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  Output: true
// Input: x = 10   Output: false

function isPalindrome(x){
    if(x < 0) return false; // Negative numbers are not palindromes
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(10)); // false


