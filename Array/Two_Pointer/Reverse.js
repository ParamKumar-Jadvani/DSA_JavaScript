let arr = [5, 4, 3, 2, 1];
let str = "hello";

const reverseNumber = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);
  return reversedStr;
};

const reverseString_TwoPointer = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  return str;
};

reverseString(str);
reverseNumber(arr);
