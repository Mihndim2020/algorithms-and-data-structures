const calcFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n - 1);
  }
};

console.log(calcFactorial(5));
console.log(calcFactorial(6));
console.log(calcFactorial(4));
