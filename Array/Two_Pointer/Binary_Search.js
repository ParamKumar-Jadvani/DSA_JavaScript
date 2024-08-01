const array = [1, 2, 3, 10, 20, 40, 45, 50, 70, 100, 120];
const target1 = 30;
const target2 = 45;

const Binary_Search = (array = [], target = 0) => {
  let i = 0,
    j = array.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (array[mid] == target) return mid;
    else if (array[mid] < target) i = mid + 1;
    else j = mid - 1;
  }

  return -1;
};

console.log(Binary_Search(array, target1));
console.log(Binary_Search(array, target2));
