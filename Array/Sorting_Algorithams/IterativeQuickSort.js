const IterativeQuickSort = (arr) => {
  let stack = [];
  let n = arr.length;

  stack.push({ left: 0, right: n - 1 });

  while (stack.length > 0) {
    let { left, right } = stack.pop();

    let pivotIndex = Partition(arr, left, right);

    if (pivotIndex - 1 > left) {
      stack.push({ left: left, right: pivotIndex - 1 });
    }

    if (pivotIndex + 1 < right) {
      stack.push({ left: pivotIndex + 1, right: right });
    }
  }

  return arr;
};

const Partition = (arr, left, right) => {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
};

let array = [5, 2, 8, 3, 1, 6, 4];

console.log(IterativeQuickSort(array));
console.log(IterativeQuickSort([7, 3, 9, 1, 5, 8]));
console.log(IterativeQuickSort([12, 4, 19, 8, 3, 17, 10]));
console.log(IterativeQuickSort([23, 45, 12, 67, 34, 89, 21]));
console.log(IterativeQuickSort([6, 1, 8, 4, 7, 3]));
console.log(IterativeQuickSort([50, 15, 22, 89, 38, 41]));
