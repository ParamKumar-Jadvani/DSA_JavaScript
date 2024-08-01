const movesZeros = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

let arr = [1, 0, 3, 0, 4, 5, 6];

const result = movesZeros(arr);

console.log(result);