const rotatedSearch = (arr, target) => {
  let max = Math.max(...arr);
  let maxindex = arr.indexOf(max);

  let left1 = 0;
  let left2 = maxindex + 1;
  let right1 = maxindex;
  let right2 = arr.length - 1;

  let result1 = binarySearch(arr, target, left1, right1);
  let result2 = binarySearch(arr, target, left2, right2);

  if (result1 !== -1) return result1;
  if (result2 !== -1) return result2;

  return -1;
};

const binarySearch = (arr, target, left, right) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

console.log(rotatedSearch([4, 5, 6, 7, 0, 1, 2], 0));
