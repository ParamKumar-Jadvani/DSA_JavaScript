const insertionSort = (array) => {
  // 1. Nested For Loops
  // let n = array.length;
  // for (let i = 1; i < n; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (array[j] > array[i]) {
  //       let temp = array[j + 1];
  //       array[j + 1] = array[j];
  //       array[j] = temp;
  //     } else {
  //       break;
  //     }
  //   }
  // }

  // 2. While Loop
  let n = array.length;
  let i = 1;
  while (i < n) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
    i++;
  }
  return array;
};
let array = [5, 2, 8, 3, 1, 6, 4];

console.log(insertionSort(array));
console.log(insertionSort([7, 3, 9, 1, 5, 8]));
console.log(insertionSort([12, 4, 19, 8, 3, 17, 10]));
console.log(insertionSort([23, 45, 12, 67, 34, 89, 21]));
console.log(insertionSort([6, 1, 8, 4, 7, 3]));
console.log(insertionSort([50, 15, 22, 89, 38, 41]));
