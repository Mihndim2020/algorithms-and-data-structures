const curry = (a) => {
  return (b) => a * b;
};

const curry2 = (a) => (b) => a * b;

console.log(curry(2)(3));
console.log(curry2(2)(3));
