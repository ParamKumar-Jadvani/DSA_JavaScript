const Sliding_Window_Min_Sum = (arr, k) => {
  let minSum = Infinity;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  minSum = Math.min(minSum, currentSum);

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    minSum = Math.min(minSum, currentSum);
  }
  return minSum;
};

let arr = [2, 1, 5, 1, 3, 2],
  k = 3;

console.log(Sliding_Window_Min_Sum(arr, k));
