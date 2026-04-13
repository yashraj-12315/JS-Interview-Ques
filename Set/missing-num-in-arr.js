// Find all missing numbers in an array from 1 to N
// Note: Array may contain duplicates

const arr= [1,2,2,5,6,7];
const n=7;

const unique = new Set(arr);
const missing= [];
for(let i=1;i<=n;i++){
    if(!unique.has(i)){
        missing.push(i)
    }
}

console.log(missing);