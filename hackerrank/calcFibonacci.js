const calcFib = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return calcFib(n - 2) + calcFib(n - 1);
  }
};
