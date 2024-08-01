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

reverseString(str);
reverseNumber(arr);
