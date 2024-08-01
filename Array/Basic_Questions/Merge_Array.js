let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

const mergeArrays = (arr1, arr2) => {
  let mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }
  return mergedArray;
};

let result = mergeArrays(arr1, arr2);

console.log(result);
