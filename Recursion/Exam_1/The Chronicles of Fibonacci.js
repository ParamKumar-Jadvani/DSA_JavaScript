// The Chronicles of Fibonacci

const Fibonacci = (n) => {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};

console.log(Fibonacci(6));
