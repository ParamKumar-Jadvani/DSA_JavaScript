// 2. Search in a 2D Matrix:
// - Treat the 2D matrix as a 1D array by linearizing the indices.
// - Use binary search to find the target value in the linearized version of the matrix.

// Example Input:
// matrix = [
// [1, 3, 5],
// [7, 9, 11],
// [13, 15, 17]
// ]
// target = 9

// Example Output: True

let arr = [
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17],
];
let target = 9;

const Search = (arr, target) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = binarySearch(arr[i], target);
    if (result != -1) return true;
  }
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
};

console.log(Search(arr, target));
