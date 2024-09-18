// The Battle of Array Warriors

const findMaxProduct = (arr) => {
  // 1. New Array
  //   let max = Math.max(...arr);
  //   let newarr = [];
  //   for (let i = 0; i < arr.length; i++) if (arr[i] != max) newarr.push(arr[i]);
  //   return Math.max(...newarr) * max;

  // 2. Filter Array
  let max = Math.max(...arr);
  arr = arr.filter((e) => e !== max);
  return Math.max(...arr) * max;
};
console.log(findMaxProduct([3, 5, 1, 7, 9]));
