const Find_Nearest_Sum = (target = 0, array) => {
  let i = 0;
  let j = array.length - 1;
  let currSum = array[i] + array[j];
  let nearest = 0;
  let result = [];

  if (currSum < target) nearest = target - currSum;
  else if (currSum > target) nearest = currSum - target;

  do {
    if (currSum == target) return currSum;
    else if (currSum < target) {
      if (nearest > target - currSum) {
        result[0] = currSum;
        result[1] = array[i];
        result[2] = array[j];
        nearest = target - currSum;
      }
      i++;
    } else if (currSum > target) {
      if (nearest > currSum - target) {
        result[0] = currSum;
        result[1] = array[i];
        result[2] = array[j];
        nearest = currSum - target;
      }

      j--;
    }

    currSum = array[i] + array[j];
  } while (i < j);

  return result;
};

let array = [13, 27, 33, 45, 51, 52];
let target = 80;

let result = Find_Nearest_Sum(target, array);

console.log(`Target is : ${target}`);
console.log(`Answer is : ${result[0]}`);
console.log(`Value is : ${result[1]} ${result[2]}`);

console.log(result);
