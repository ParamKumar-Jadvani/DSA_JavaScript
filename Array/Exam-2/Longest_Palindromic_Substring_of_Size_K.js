const Longest_Palindromic_Substring_of_Size_K = (str, k) => {
  let left = 0;
  let right = 0;
  let max = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    left = i - 1;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        console.log(right - left + 1, max);
        result = str.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }

  return result;
};

console.log(Longest_Palindromic_Substring_of_Size_K("babad", 3));
