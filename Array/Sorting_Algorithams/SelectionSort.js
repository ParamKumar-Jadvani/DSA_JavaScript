const SelectionSort = (array) => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++)
      if (array[j] < array[minIndex]) minIndex = j;

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
};

let array = [5, 2, 8, 3, 1, 6, 4];

console.log(SelectionSort(array));
console.log(SelectionSort([7, 3, 9, 1, 5, 8]));
console.log(SelectionSort([12, 4, 19, 8, 3, 17, 10]));
console.log(SelectionSort([23, 45, 12, 67, 34, 89, 21]));
console.log(SelectionSort([6, 1, 8, 4, 7, 3]));
console.log(SelectionSort([50, 15, 22, 89, 38, 41]));
