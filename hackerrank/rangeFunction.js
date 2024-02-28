const range = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(range(1, 50));

// console.log([...Array(50).keys()]);

const range2 = (start, end) => {
  return [...Array(end - start + 1).keys()].map((el) => el + start);
};

console.log(range2(1, 50));
