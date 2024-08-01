const twovalue_sum = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];

    if (sum == target) return [arr[i], arr[j]];
    else if (sum < target) i++;
    else j--;
  }
  return [-1, -1];
};

let arr = [1, 2, 3, 4, 5];
let target = 9;

let result = twovalue_sum(arr, target);

console.log(result);
