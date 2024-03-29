const privateCounter = () => {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

console.dir(counter.getValue);
