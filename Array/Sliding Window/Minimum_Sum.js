const minimum_Sum = (arr, k) => {
  let minSum = 0;
  let currSum = 0;
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  }
  minSum = currSum;
  for (let i = k; i < arr.length; i++) {
    currSum += arr[i] - arr[i - k];
    minSum = Math.min(minSum, currSum);
  }
  return minSum;
};

let result1 = minimum_Sum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3);
let result2 = minimum_Sum([3, 7, 1, 8, 6, 4], 2);

console.log(result1, result2);
