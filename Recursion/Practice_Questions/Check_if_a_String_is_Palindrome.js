// Check if a String is Palindrome

const Check_if_a_String_is_Palindrome = (
  string,
  i = 0,
  j = string.length - 1
) => {
  // 1. Two Pointer Recursive
  if (i == j) return true;
  if (string.charAt(i).toLowerCase() !== string.charAt(j).toLowerCase())
    return false;

  return Check_if_a_String_is_Palindrome(string, ++i, --j);

  // 2. Without Two Pointer Recursive
  //   if (string.length <= 1) return true;
  //   if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase())
  //     return false;
  //   return Check_if_a_String_is_Palindrome(string.slice(1, -1));
};

console.log(Check_if_a_String_is_Palindrome("racecar"));
console.log(Check_if_a_String_is_Palindrome("hello"));
console.log(Check_if_a_String_is_Palindrome("madam"));
console.log(Check_if_a_String_is_Palindrome("ma"));
