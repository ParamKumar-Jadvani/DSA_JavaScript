const missing = (arr) => {
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  //   let expectedSum = 0;

  //   for (let i = 0; i < n; i++) {
  //     expectedSum += i + 1;
  //   }

  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
};

let arr1 = [0, 1, 3, 4, 5, 6];
let arr2 = [0, 1, 3, 4];

console.log(missing(arr1));
console.log(missing(arr2));
