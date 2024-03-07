const memoizedFunction = (input) => {
  let cache = {};
  if (cache[input]) {
    return cache[input];
  }
  cache[input] = 10 + input;
  return cache[input];
};

console.log(memoizedFunction(10));
console.log(memoizedFunction(15));
console.log(memoizedFunction(14));
