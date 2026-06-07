function largest(arr) {

    if(!Array.isArray(arr)){
        throw new TypeError("Input must be an array")
    }

    if (arr.length === 0) {
        throw new Error("Array is empty")
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(largest([20, 10, 40, 60, 50]));

// console.log(largest("yash"));