// Find Minimum in array

const find_min_Value = (array, i = 0, min = Infinity) => {
  if (i === array.length && min === Infinity) return false;
  if (i === array.length) return min;
  if (array[i] < min) min = array[i];
  return find_min_Value(array, i + 1, min);
};

console.log(find_min_Value([3, 1, 4, 1, 5, 9]));
console.log(find_min_Value([10, 20, 5, 8, 3]));
console.log(find_min_Value([7, 6, 2, 8, 4]));
