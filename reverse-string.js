// function reverseString(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseString("I Love Javascript"));

function reverseString(str){
    const strArr = str.split(" ");
    let revStr=[];
    for(let i=strArr.length-1;i>=0;i--){
        revStr.push(strArr[i])
    }
    return revStr.join(" ");
}

console.log(reverseString("I Love Javascript"))
