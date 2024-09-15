// Reverse Array

const reverse_Array = (array, i = 0) => {
  if (i === array.length) return;

  reverse_Array(array, i + 1);

  console.log(array[i]);
};

reverse_Array([1, 2, 3, 4]);
reverse_Array([10, 20, 30]);
reverse_Array([7, 6, 5]);
