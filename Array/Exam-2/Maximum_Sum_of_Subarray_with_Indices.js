const maximum_Sum_of_Subarray_with_Indices = (arr) => {
  let sum = 0;
  let max = 0;
  let start = 0;
  let max_start = 0;
  let max_end = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
      max_start = start;
      max_end = i;
    }
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }
  return [max_start, max_end];
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maximum_Sum_of_Subarray_with_Indices(arr));
console.log(maximum_Sum_of_Subarray_with_Indices(arr2));
