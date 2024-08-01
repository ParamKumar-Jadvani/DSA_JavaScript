let arr = [3, 7, 1, 9, 2];

const biggest = (arr) => {
  let small = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > small) {
      small = arr[i];
    }
  }
  return small;
};

const result = biggest(arr);

console.log(result);
