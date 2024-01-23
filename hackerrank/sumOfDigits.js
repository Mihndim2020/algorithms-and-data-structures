// Given an integer, , find the smallest integer  such that  is divisible by  (i.e.,  is a factor of ) and satisfies the following properties must not contain zeroes in its decimal representation. The sum of 's digits must be greater than or equal to the product of 's digits. Given , find  and print the number of digits in 's decimal representation. Input Format A single integer denoting . Constraints is not divisible by .

function divisibleNumbers(n) {
  let m = n;
  let i = 1;

  function sumOfDigits(num) {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  function productOfDigits(num) {
    return num
      .toString()
      .split("")
      .reduce((product, digit) => product * parseInt(digit), 1);
  }

  while (!(sumOfDigits(m) >= productOfDigits(m) && m % 10 !== 0)) {
    m *= i;
    i += 1;
  }
  return m.toString().length;
}
