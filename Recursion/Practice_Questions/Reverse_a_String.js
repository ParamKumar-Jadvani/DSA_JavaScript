//  Reverse a String

const Reverse_String = (str, i) => {
  if (i < 0) return "";
  console.log(str[i]);
  Reverse_String(str, --i);
};

const strArray = ["hello", "world", "abcd", "recursion"];

strArray.some((str) => {
  Reverse_String(str, str.length - 1);
  console.log("\n");
});
