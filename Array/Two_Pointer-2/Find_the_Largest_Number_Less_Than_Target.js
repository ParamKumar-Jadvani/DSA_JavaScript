const findLarget_Near_Value = (arr, target) => {
  let value = arr[0];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] <= target) {
      value = arr[i];
      i++;
    } else break;
  }
  return value;
};

let arr = [10, 20, 30, 40];
let target = 28;

let result = findLarget_Near_Value(arr, target);

console.log(result);
