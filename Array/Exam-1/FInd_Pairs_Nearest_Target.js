const Find_Pairs_Nearest_Target = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  let min_diff = Infinity;
  let result = [];

  while (i < j) {
    let diff = Math.abs(arr[i] + arr[j] - target);
    if (diff < min_diff) {
      min_diff = diff;
      result = [arr[i], arr[j]];
    }

    if (arr[i] + arr[j] < target) i++;
    else j--;
  }
  return result;
};

let arr = [1, 3, 4, 7, 10];
let target = 15;

console.log(Find_Pairs_Nearest_Target(arr, target));
