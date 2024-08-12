const find_Pairs_with_Target_Sum = (arr, target) => {
  arr.sort((a, b) => a - b);
  const result = [];

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      result.push([arr[i], arr[j]]);
      i++;
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 3, 5, 7];
const target1 = 7;
const target2 = 9;

console.log(find_Pairs_with_Target_Sum(arr, target1));
console.log(find_Pairs_with_Target_Sum(arr2, target2));
