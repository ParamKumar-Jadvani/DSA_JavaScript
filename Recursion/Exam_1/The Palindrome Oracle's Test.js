// The Palindrome Oracle's Test

const palindromeOracle = (string, i = 0, j = string.length - 1) => {
  if (i === j) return true;
  if (string.charAt(i).toLowerCase() !== string.charAt(j).toLowerCase())
    return false;

  return palindromeOracle(string, ++i, --j);
};

console.log(palindromeOracle("racecar"));
