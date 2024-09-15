// Count Occurrences of a Character

const Count_Occurrences_of_a_Character = (
  string,
  character,
  i = 0,
  count = 0
) => {
  // 1. Return number
  if (i === string.length) return 0;
  if (string[i] == character)
    return 1 + Count_Occurrences_of_a_Character(string, character, ++i);
  return Count_Occurrences_of_a_Character(string, character, ++i);

  // 2. Return number as variable
  // if (i === string.length) return count;
  // string[i] === character ? (count += 1) : null;
  // return Count_Occurrences_of_a_Character(string, character, ++i, count);
};

console.log("l =>", Count_Occurrences_of_a_Character("hello world", "l"));
console.log("r =>", Count_Occurrences_of_a_Character("recursion", "r"));
console.log("p =>", Count_Occurrences_of_a_Character("apple", "p"));
