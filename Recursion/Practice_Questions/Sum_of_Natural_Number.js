//  Sum of Natural Numbers


const naturalSum = (n) => {
  if (n === 0) return 0;

  return n + naturalSum(n - 1);
};

console.log(naturalSum(0));
console.log(naturalSum(3));
console.log(naturalSum(5));
