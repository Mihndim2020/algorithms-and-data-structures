// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

function plusMinus2(arr) {
  let results = {
    pos: 0,
    neg: 0,
    zero: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results.pos++;
    } else if (arr[i] < 0) {
      results.neg++;
    } else {
      results.zero++;
    }
  }

  for (let [key, value] of Object.entries(results)) {
    console.log((value / arr.length).toFixed(6));
  }
}
