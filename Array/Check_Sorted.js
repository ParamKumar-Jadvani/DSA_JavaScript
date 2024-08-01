let arr = [2, 1, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

const Check_Sorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const result = Check_Sorted(arr);

console.log(result);
