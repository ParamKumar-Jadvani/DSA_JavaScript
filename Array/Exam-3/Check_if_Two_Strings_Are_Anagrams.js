const find_Anagrams = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let flag = true;

  console.log(arr1.sort(), arr2.sort());
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  return flag;

  /*Second Method
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
  */
};

let str1 = "listen";
let str2 = "silent";

let result = find_Anagrams(str1, str2);

console.log(result);
