const IterativeMergeSort = (arr) => {
  let n = arr.length;
  let width = 1;

  while (width < n) {
    let i = 0;
    while (i < n) {
      let mid = i + width;
      let right = Math.min(i + 2 * width, n);
      let left = arr.slice(i, mid);
      let rightArr = arr.slice(mid, right);
      let merged = Merge(left, rightArr);
      arr.splice(i, right - i, ...merged);
      i += 2 * width;
    }
    width *= 2;
  }

  return arr;
};

const Merge = (left, right) => {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

let array = [5, 2, 8, 3, 1, 6, 4];

console.log(IterativeMergeSort(array));
console.log(IterativeMergeSort([7, 3, 9, 1, 5, 8]));
console.log(IterativeMergeSort([12, 4, 19, 8, 3, 17, 10]));
console.log(IterativeMergeSort([23, 45, 12, 67, 34, 89, 21]));
console.log(IterativeMergeSort([6, 1, 8, 4, 7, 3]));
console.log(IterativeMergeSort([50, 15, 22, 89, 38, 41]));
