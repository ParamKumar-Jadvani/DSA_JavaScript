// Count Occurrences of a number in array

const Count_Occurrences_in_array = (array, num, i = 0, count = 0) => {
  // 1. Return number
  // if (i === array.length) return 0;
  // if (array[i] == num) return 1 + Count_Occurrences_in_array(array, num, ++i);
  // return Count_Occurrences_in_array(array, num, ++i);

  // 2. Return number as variable
  if (i === array.length) return count;
  array[i] === num ? (count += 1) : null;
  return Count_Occurrences_in_array(array, num, ++i, count);
};

console.log("2 =>", Count_Occurrences_in_array([1, 2, 2, 3, 2], 2));
console.log("4 =>", Count_Occurrences_in_array([4, 5, 6, 5, 4], 4));
console.log("7 =>", Count_Occurrences_in_array([7, 8, 9, 7, 9], 7));
