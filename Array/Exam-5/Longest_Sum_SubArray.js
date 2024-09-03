const LongestSumSubArray_Without_Repeating_Number = (array) => {
  let set = new Set();
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      set.add(array[i]);
      sum += array[i];
    }
  }
  console.log(sum, set.size);
};

const arr = [1, 2, 3, 4, 5];

LongestSumSubArray_Without_Repeating_Number([1, 2, 3, 4, 5]);
LongestSumSubArray_Without_Repeating_Number([1, 2, 1, 3, 2]);
