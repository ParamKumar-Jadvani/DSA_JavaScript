//  Power of a Number
const Power_of_a_Number = (n, power) => {
  if (power === 0) return 1;
  return n * Power_of_a_Number(n, power - 1);
};

console.log(Power_of_a_Number(2, 3));
console.log(Power_of_a_Number(5, 0));
console.log(Power_of_a_Number(3, 4));
