const BubbleSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

let array = [5, 2, 8, 3, 1, 6, 4];

console.log(BubbleSort(array));
console.log(BubbleSort([7, 3, 9, 1, 5, 8]));
console.log(BubbleSort([12, 4, 19, 8, 3, 17, 10]));
console.log(BubbleSort([23, 45, 12, 67, 34, 89, 21]));
console.log(BubbleSort([6, 1, 8, 4, 7, 3]));
console.log(BubbleSort([50, 15, 22, 89, 38, 41]));
