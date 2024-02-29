const findAndCountMinValue = (arr) => {
  let sorted = arr.sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] === sorted[0]) {
      count += 1;
    } else {
      break;
    }
  }
  return count;
};

const countMine = (arr) => {
  let min = Math.min(...arr);

  let minArray = arr.filter((elem) => elem === min);
  return minArray.length;
};

const items = [3, 1, 2, 4, 6, 1, 9, 1];

console.log(findAndCountMinValue(items));
console.log(countMine(items));
