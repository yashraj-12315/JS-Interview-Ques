// const arr3D = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// console.log(arr3D[0][1][1]);

const matrix = [
  [1, 2],
  [3, 4],
];

// for(let i=0;i<matrix.length;i++){
//    for(j=0;j<matrix.length;j++){
//     console.log(matrix[i][j])
//    }
// }

const doubled = matrix.map((row) => row.map((num) => num * 2));
console.log(doubled);