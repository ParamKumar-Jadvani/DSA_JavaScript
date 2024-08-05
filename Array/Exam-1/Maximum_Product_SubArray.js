const Max_Product_SubArray = (arr) => {
  let max = 1;
  let curr = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    curr = 1;
    let subArray = [];
    for (let j = i + 1; j < arr.length; j++) {
      subArray.push(arr[i], arr[j]);
      curr *= arr[i] * arr[j];
      max = Math.max(max, curr);
    }
  }
  return max;
};

let arr = [2, 3, -2, 4];

const result = Max_Product_SubArray(arr);

console.log(result);
