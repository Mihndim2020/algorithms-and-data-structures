const calcFib = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return calcFib(n - 2) + calcFib(n - 1);
  }
};

console.log(calcFib(10));

function fibonacci(n) {
  // Handle base cases:
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    // Initialize the sequence with the first two numbers:
    const sequence = [0, 1];

    // Iterate from 2 to n, calculating and appending the next Fibonacci number:
    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
  }
}
