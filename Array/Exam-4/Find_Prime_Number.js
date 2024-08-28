const primeNumber = (n) => {
  if (n <= 3) return true;

  for (let i = 2; i <= 9; i++) {
    if (n % i == 0 && n != i) return false;
  }
  return true;
};

const findRangeOFPrime = (n) => {
  for (let i = 1; i <= n; i++) {
    if (primeNumber(i)) {
      console.log(i);
    }
  }
};

let n = 100;

findRangeOFPrime(n);
