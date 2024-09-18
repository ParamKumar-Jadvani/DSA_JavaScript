// The Mirror of Reversal

const Reversal = (string, i = 0, revString = "") => {
  if (i === string.length) return revString;
  revString = string[i] + revString;
  return Reversal(string, i + 1, revString);
};

console.log(Reversal("recursion"));
