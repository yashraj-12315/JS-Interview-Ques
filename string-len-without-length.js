// count string length without using length property

function strLength(str) {
  let length = 0;
  for (let char of str) {
    length++;
  }
  return length;
}

console.log(strLength("yash"));
