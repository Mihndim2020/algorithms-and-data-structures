// Write a function to counts for a given element x, the number of x+1 elements that exist in the array.

const countElements = (arr) => {
  let count = 0;
  arr.forEach((element) => {
    if (arr.includes(element + 1)) {
      count += 1;
    }
  });
  return count;
};
