const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

const myArry = [1, 1, 2, 3, 4, 4, 5, 5];

console.log(removeDuplicates(myArry));
