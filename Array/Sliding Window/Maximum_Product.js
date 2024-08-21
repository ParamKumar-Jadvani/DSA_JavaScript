const maximumProduct = (arr, k) => {
  let maxProduct = 1;
  let currProduct = 1;

  for (let i = 0; i < k; i++) {
    currProduct *= arr[i];
  }
  maxProduct = currProduct;

  for (let i = k; i < arr.length; i++) {
    currProduct /= arr[i - k];
    currProduct *= arr[i];
    maxProduct = Math.max(maxProduct, currProduct);
  }
  return maxProduct;
};

let result1 = maximumProduct([2, 5, 3, 1, 8, 9, 2], 2);
let result2 = maximumProduct([4, 2, 6, 3, 8], 3);

console.log(result1, result2);
