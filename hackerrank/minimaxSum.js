function miniMaxSum(arr) {
  let sorted = arr.sort();
  let sum = sorted.reduce((acc, curr) => acc + curr);
  console.log(`${sum - sorted[4]} ${sum - sorted[0]}`);
}
