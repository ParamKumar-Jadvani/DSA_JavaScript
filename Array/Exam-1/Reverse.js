const ReverseArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

let arr = [10, 30, 40, 20, 70, 60];

const result = ReverseArray(arr);

console.log(result);
