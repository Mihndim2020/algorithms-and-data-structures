const shuffleItems = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((a) => a.value);
};

const arr = [3, 4, 6, 9, 6, 2, 1];

console.log(shuffleItems(arr));
