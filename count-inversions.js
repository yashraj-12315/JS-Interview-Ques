// Given an array of integers arr[]. You have to find the Inversion Count of the array. 
// Note : Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
// Input: arr[] = [2, 3, 4, 5, 6]
// Output: 0
// Explanation: As the sequence is already sorted so there is no inversion count.
// Input: arr[] = [10, 10, 10]
// Output: 0
// Explanation: As all the elements of array are same, so there is no inversion count.

function inversionCount(arr){
    let count = 0;
    let pairs = [];
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count++;
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return { count, pairs };
}

console.log(inversionCount([2, 4, 1, 3, 5])); 

// Time Complexity: O(n^2) as we are using two nested loops to compare each element with every other element.
// Space Complexity: O(n) as we are storing the pairs of inversions in an array.