// Question: Given an array of integers, find the contiguous subarray within an array (containing at
//     least one number) which has the largest product. Implement the function `maxProductSubArray(arr)`
//     that takes an array `arr` as input and returns an integer representing the maximum product
//     subarray.

//     Sample Input and Output:
//     Input: arr = [2, 3, -2, 4]
//     Output: 6
//     Explanation: [2, 3] has the largest product = 6.

const maxProductSubArray = (arr) => {
  let maxProduct = arr[0];
  let minProduct = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentMaxProduct = maxProduct * arr[i];
    let currentMinProduct = minProduct * arr[i];

    maxProduct =
      arr[i] > currentMaxProduct && arr[i] > currentMinProduct
        ? arr[i]
        : currentMaxProduct > currentMinProduct
        ? currentMaxProduct
        : currentMinProduct;

    minProduct =
      arr[i] < currentMaxProduct && arr[i] < currentMinProduct
        ? arr[i]
        : currentMaxProduct < currentMinProduct
        ? currentMaxProduct
        : currentMinProduct;

    globalMax = globalMax > maxProduct ? globalMax : maxProduct;

    // maxProduct = Math.max(arr[i], currentMaxProduct, currentMinProduct);
    // minProduct = Math.min(arr[i], currentMaxProduct, currentMinProduct);
    // globalMax = Math.max(globalMax, maxProduct);
  }

  return globalMax;
};

// Example usage
let arr = [2, 3, -2, 4];
console.log(maxProductSubArray(arr)); // Output: 6

// const arr2 = [2, -3, 4, -1, -2, 1, 5, -3];
// console.log(maxProductSubArray(arr2)); // Output: 720
