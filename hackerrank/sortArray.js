const numbers = [3, 1, 4, 1, 5];

const sorted = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sorted(numbers));
