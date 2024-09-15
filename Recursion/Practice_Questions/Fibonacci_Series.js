//  Fibonacci Series

const Fib = (n) => {
  if (n < 2) return n;
  return Fib(n - 1) + Fib(n - 2);
};

console.log(Fib(0));
console.log(Fib(5));
console.log(Fib(7));

// Code Walk through
/*
 Example:
 
 input  =  n = 6;
 output = Fib(n) => 8;

 fib(n) = fib(n-1) + fib(n-2);

 fib(6) = fib(5) + fib(4);
  (8)        (5)      (3)

 fib(5) = fib(4) + fib(3);
  (5)        (3)      (2)

 fib(4) = fib(3) + fib(2);
  (3)        (2)      (1)

 fib(3) = fib(2) + fib(1);
  (2)        (1)      (1)

 fib(2) = fib(1) + fib(0);
  (1)       (1)     (0)

 fib(1) = 1;
 fib(0) = 0;

 */
