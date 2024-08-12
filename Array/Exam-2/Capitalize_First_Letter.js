const Capitalize_Letter = (str) => {
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

const str = "the quick Brown fox jumps over The lazy dog.";
const subStr = str.split(" ");
const result = Capitalize_Letter(subStr);
console.log(result);
