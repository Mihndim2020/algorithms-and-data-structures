//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

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
