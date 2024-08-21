const Capitalize_Letter = (str) => {
  for (let i = 0; i < str.length; i++) {
    str[0] = str[0].toUpperCase();
    if (str[i] == " ") {
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  return str.join("");
};

const str = "the quick Brown fox jumps over The lazy dog.";
const subStr = str.split("");
const result = Capitalize_Letter(subStr);
console.log(result);
