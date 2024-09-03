// 3. Spiral Order of a 2D array:

// Example Input:
// array = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// Example Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const Spiral = (array) => {
  let result = [];
  let top = 0;
  let left = 0;
  let right = array[0].length - 1;
  let bottom = array.length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(array[top][i]);

    top++;

    for (let i = top; i <= bottom; i++) result.push(array[i][right]);

    right--;

    for (let i = right; i >= left; i--) result.push(array[bottom][i]);

    bottom--;

    for (let i = bottom; i >= top; i--) result.push(array[i][left]);

    left++;
  }

  return result;
};

console.log(Spiral(arr)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
