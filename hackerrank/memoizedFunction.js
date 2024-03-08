const memoizeAdd = (input) => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching results");
      return cache[value];
    } else {
      console.log("Calculating results");
      // const result = value + 10;
      cache[value] = 10 + value;
      return cache[value];
    }
  };
};

const newAdd = memoizeAdd();

console.log(newAdd(10));
console.log(newAdd(15));
console.log(newAdd(14));
console.log(newAdd(10));
