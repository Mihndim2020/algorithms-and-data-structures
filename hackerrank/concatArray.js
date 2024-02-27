const concatArray = (arr1, arr2) => {
  // return [...arr1, ...arr2];
  return arr1.concat(...arr2); // Concatenate does not mutate an array...
};
