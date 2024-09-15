// Sum Array

const Sum_array = (array, i = 0, sum = 0) => {
  if (i === array.length) return 0;
  return array[i] + Sum_array(array, i + 1, sum);
};

console.log(Sum_array([1, 2, 3, 4, 5]));
console.log(Sum_array([10, 20, 30]));
console.log(Sum_array([7, -2, 3]));
