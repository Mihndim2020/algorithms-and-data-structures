const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("foof"));
console.log(isPalindrome("foo"));
