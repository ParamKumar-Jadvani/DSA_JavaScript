let arr = [1, 2, 3, 4, 5];
let position = 4;

const rotate = (arr, position) => {
  let result = [];
  for (let i = position; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let i = 0; i < position; i++) {
    result.push(arr[i]);
  }
  return result;
};

const result = rotate(arr, position);

console.log(result);
