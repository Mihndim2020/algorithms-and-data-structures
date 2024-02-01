const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
  }
};
