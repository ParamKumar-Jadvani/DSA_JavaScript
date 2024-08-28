const findIndex_Duplicated = (arr) => {
  let map = new Map();
  let Index = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      Index = map.get(arr[i]);
      return Index;
    } else {
      map.set(arr[i], i);
    }
  }
  return -1;
};

let nums = [1, 2, 3, 2, 1];
let nums2 = [4, 5, 6, 7, 8];

console.log(findIndex_Duplicated(nums));
console.log(findIndex_Duplicated(nums2));
