// 3. Spiral Order of a 2D Matrix:

// Example Input:
// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// Example Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const Spiral = (arr) => {
  let result = [];
  let top = 0;
  let bottom = arr.length - 1;
  let left = 0;
  let right = arr[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(arr[i][right]);
      console.log(result, top, bottom, right, left);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
    }
  }
  return result;
};

console.log(Spiral(arr));
