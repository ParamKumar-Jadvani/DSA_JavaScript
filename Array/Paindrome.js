function isPalindrome(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      newStr += char.toLowerCase();
    }
  }
  let i = 0,
    j = newStr.length - 1;
  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

let str = "A man, a plan, a canal: Panama";
let result = isPalindrome(str);

console.log(result);
