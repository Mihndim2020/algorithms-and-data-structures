function birthdayCakeCandles(candles) {
  let sorted = candles.sort();
  let count = 0;
  let max = sorted[sorted.length - 1];
  while (sorted[sorted.length - 1] === max) {
    count = count + 1;
    sorted.pop();
  }

  return count;
}
