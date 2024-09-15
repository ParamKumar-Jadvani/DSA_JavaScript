// Sum of Digits

const Sum_Of_Digits = (n) => {
  if (n === 0) return 0;

  return (n % 10) + Sum_Of_Digits(Math.floor(n / 10));
};

console.log(Sum_Of_Digits(123));
console.log(Sum_Of_Digits(456));
console.log(Sum_Of_Digits(789));
