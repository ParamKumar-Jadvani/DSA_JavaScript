let arr = [10, 20, 30, 40, 50, 60, 70];

const sum_ForLoop = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const result = sum(arr);

console.log(result);
