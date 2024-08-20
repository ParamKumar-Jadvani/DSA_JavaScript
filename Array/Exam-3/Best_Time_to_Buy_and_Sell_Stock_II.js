const Best_Time_to_Buy_Sell_Stock_2 = (arr) => {
  let maxProfit = 0;
  let minPrice = arr[0];

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (minPrice > arr[i]) {
      minPrice = arr[i];
    } else {
      let currProfit = arr[i] - minPrice;
      maxProfit += currProfit;
      minPrice = arr[i];
    }
  }
  return maxProfit;
};

let arr = [7, 1, 5, 3, 6, 4];
let arr2 = [1, 2, 3, 4, 5];
let result = Best_Time_to_Buy_Sell_Stock_2(arr2);

console.log(result);
