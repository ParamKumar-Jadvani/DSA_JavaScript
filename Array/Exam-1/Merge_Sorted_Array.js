const mergeArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
};

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

const result = mergeArrays(arr1, arr2);

console.log(result);
