const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const col = array[0].length;
const row = array.length;

const Print_N = (array, row, col) => {
  for (let i = 0; i < row; i++) {
    console.log(array[i][0]);
  }
  let j = col - 1;
  for (let i = 0; i < row; i++, j--) {
    console.log(array[j][i]);
  }

  for (let i = 0; i < row; i++) {
    console.log(array[i][col - 1]);
  }
};

Print_N(array, row, col);
