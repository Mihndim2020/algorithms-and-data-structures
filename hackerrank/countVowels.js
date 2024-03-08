const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (vowels.includes(str[i])) {
  //     countVowels++;
  //   }
  //}
  for (let char of vowels) {
    if (vowels.includes(char)) {
      countVowels++;
    }
  }
  return countVowels;
};

const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      return vowels.includes(char) ? acc + 1 : acc;
    }, 0);
};

const testString = "The game changers";
const testString2 = "The change makers";

console.log(countVowels(testString));
console.log(countVowels(testString2));
console.log(findVowels(testString));
console.log(findVowels(testString2));
