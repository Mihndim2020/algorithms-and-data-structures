const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

const myArry = [1, 1, 2, 3, 4, 4, 5, 5];

console.log(removeDuplicates(myArry));

const removeDup = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []);
};
console.log(removeDup(myArry));

const removeDupl = (arr) => {
  let singleton = [];
  arr.forEach((elem) => {
    if (!singleton.includes(elem)) {
      singleton.push(elem);
    }
  });
  return singleton;
};
console.log(removeDupl(myArry));
