// Maximum Sum Subarray (Kadane's Algorithm)

// Problem: Find the contiguous subarray within a one-dimensional array of numbers which has the largest sum.
// Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6 (subarray: [4,-1,2,1])

const findMaxSubarraySumAndArray = (nums) => {
  if (nums.length === 0) return { maxSum: 0, maxSubarray: [] };

  let maxSum = nums[0];
  let currentSubarraySum = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    let currSum = currentSubarraySum + nums[i];

    if (nums[i] > currSum) {
      currentSubarraySum = nums[i];
      tempStart = i;
    } else {
      currentSubarraySum = currSum;
    }

    if (currentSubarraySum > maxSum) {
      maxSum = currentSubarraySum;
      start = tempStart;
      end = i;
    }
  }

  let maxSubarray = [];
  for (let i = start; i <= end; i++) {
    maxSubarray.push(nums[i]);
  }

  console.log(`Maximum subarray sum is ${maxSum}`);
  console.log("Maximum subarray is:", maxSubarray);

  return { maxSum, maxSubarray };
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findMaxSubarraySumAndArray(arr);

console.log(result);
