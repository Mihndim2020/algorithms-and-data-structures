const arrayMinMax = (arr) => {
  return `Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`;
};

console.log(arrayMinMax([3, 4, 2, 8, 1, 6, 9]));

console.log(Array.from({ length: 5 }, (v, i) => i));
