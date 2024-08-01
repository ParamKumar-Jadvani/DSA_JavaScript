const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

const merged_Sort_Array = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }
    k++;
  }
};

console.log(arr1);
