const maximumSum = (arr, k) => {
  let maxSum = 0;
  let currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  }
  maxSum = currSum;
  for (let i = k; i < arr.length; i++) {
    currSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

let result1 = maximumSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 3);
let result2 = maximumSum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 4);

console.log(result1, result2);
