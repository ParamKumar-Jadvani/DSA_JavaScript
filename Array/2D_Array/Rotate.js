// 1. Rotate a 2D Matrix by 90 Degrees Clockwise:

// Example Input:
// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// Example Output:
// matrix = [
// [7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]
// ]

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rotateMatrix = (matrix) => {
  let n = matrix.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (j = n - 1; j >= 0; j--) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  return result;
};

console.log(rotateMatrix(arr));
