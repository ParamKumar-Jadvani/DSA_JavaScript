const lengthOfLongestSubstring = (string) => {
  let maxLength = 0;
  let maxSubstring = "";

  // 1. Nested Loop Approach
  //   for (let i = 0; i < string.length; i++) {
  //     let substr = [];
  //     for (let j = i; j < string.length; j++) {
  //       if (!substr.includes(string[j])) {
  //         substr.push(string[j]);
  //         console.log(substr);
  //       } else {
  //         break;
  //       }
  //     }
  //     if (substr.length > maxLength) {
  //       maxLength = substr.length;
  //       maxSubstring = substr.join("");
  //     }
  //   }
  //   console.log(maxSubstring, maxLength);
  //   return maxLength;

  // 2. Set DS Approach
  let set = new Set();

  for (let i = 0; i < string.length - 1; i++) {
    for (let j = 0; j < string.length; j++) {
      if (!set.has(string[j])) set.add(string[j]);
      else break;
    }

    if (set.size > maxLength) {
      maxLength = set.size;
      maxSubstring = Array.from(set).join("");
    }
  }
};

lengthOfLongestSubstring("pwwkew");
