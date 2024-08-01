const removeDuplicates_ForLoop = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

const removeDuplicates_TwoPointer = (arr) => {
  if (arr.length === 0) return 0;
  let index = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[index] = arr[i];
      index++;
    }
  }
  return index;
};

let arr = [1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates_TwoPointer(arr);

console.log(result);
