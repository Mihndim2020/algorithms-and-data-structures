// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sorted = arr.sort();
  let sum = sorted.reduce((acc, curr) => acc + curr);
  console.log(`${sum - sorted[4]} ${sum - sorted[0]}`);
}
