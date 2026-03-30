
// function charFreqCount(str) {
//     let freq={};
//     for(let char of str){
//         if(char === ' ') continue; // Skip spaces
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }

// console.log(charFreqCount("hello world"));

// function charFreqCount(str) {
//     let freq={};
//     str = str.replace(/\s/g, ''); // Remove spaces
//     for(let char of str){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }

// console.log(charFreqCount("hello world"));

// using map
function charFreqCount(str) {
    const freq= new Map();

    for(let char of str){
        if(char === " ") continue; // Skip spaces
        freq.set(char,(freq.get(char) || 0) + 1);
    }
    return freq;
}

const res = charFreqCount("Hello World");
console.log(res)

const obj = Object.fromEntries(res);
console.log(obj)
